"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PiChatTeardropDots } from "react-icons/pi";
import { IoClose, IoCloseSharp } from "react-icons/io5";
import { MdSend, MdOutlineInsertEmoticon } from "react-icons/md";
import { IoMdAttach, IoMdClose } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { liveChatToggle } from "@/redux/features/liveChatSlice/liveChatSlice";
import Link from "next/link";
import axios from "axios";
import Pusher from "pusher-js";
import moment from "moment";
import { useLoadMessageQuery } from "@/redux/features/chattingApi/chattingApi";

const ChattingBox = () => {
  const { data: massageData, refetch } = useLoadMessageQuery("");
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const { liveChatStatus } = useSelector((state: any) => state.liveChat);
  const { accessToken } = useSelector((state: any) => state.auth);
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for chat container

  const handleSend = async () => {
    if (!newMessage && !file) return;

    try {
      const formData = new FormData();
      formData.append("chatMessage", newMessage);
      if (file) formData.append("photo", file);
      formData.append("receiver_id", "18");

      const response = await axios.post(
        "https://dejavu.lifestyle/api/chatting/sendMessage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.status === true) {
        setNewMessage("");
        refetch();
        setFile(null);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const [activeProto, setActivePhoto] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    const pusher = new Pusher("19760358ec8fb354db0e", {
      cluster: "ap1",
      authEndpoint: "https://dejavu.lifestyle/broadcasting/auth",
      auth: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const channel = pusher.subscribe("notification-channel");

    channel.bind("SendNotification", () => {
      refetch();
    });

    return () => {
      pusher.unsubscribe("notification-channel");
      pusher.disconnect();
    };
  }, [refetch, accessToken]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [massageData, liveChatStatus, file]);

  const filteredData = massageData?.filter((item: any) => item?.user_type !== 0);
  const adminInf = filteredData?.[0];

  return (
    <>
      <div className="sm:pt-3 fixed bottom-0 md:bottom-0 2k:bottom-16 sm:right-3 z-[500]">
        {liveChatStatus ? (
           <div className="flex flex-col h-screen sm:h-[500px] mx-auto   w-full sm::w-[400px]  overflow-hidden  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
           {/* Chat Header */}
           <div className=" ">
             <div className=" bg-[#000] text-white p-2 md:p-4 rounded-t-lg relative ">
               <div className=" pb-2 flex justify-center items-center">
                 <div className=" bg-[#96929273]  flex  items-center cursor-pointer gap-1 px-5 text-white py-1 rounded-[14px]">
                   <PiChatTeardropDots className="text-[18px]" />
                   <p className="text-white text-base">Chat</p>
                 </div>
               </div>
               <div
                 onClick={() => dispatch(liveChatToggle())}
                 className="text-xl font-medium absolute right-4 top-4 hover:bg-[#96929273] rounded p-2 cursor-pointer duration-200"
               >
                 <IoClose />
               </div>
               <div className="flex items-center space-x-2">
                 <div className="w-10 h-10 rounded-full">
                   <Image
                     width={50}
                     height={50}
                     src={`${process.env.BASE_URL}/images/${adminInf?.profile_photo_path}`}
                     alt="avatar"
                     className="w-10 h-10 object-cover rounded-full"
                   />
                 </div>
                 <div className="text-sm">
                   <p className="text-sm font-medium">
                     {adminInf?.name} from Onedrob
                   </p>
                   <p className="text-xs">Customer Service</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Chat Messages */}
           <div
             ref={chatContainerRef}
             className="flex-1 p-4 space-y-2 overflow-y-auto  relative chattingScrollbar bg-gray-50 w-[300px] md:min-w-[320px]"
           >
             {massageData?.length &&
               massageData?.map((msg:any, index:number) => (
                 <div key={index}>
                   <p className="text-[10px] text-center font-medium uppercase">
                     {moment(massageData?.create_at).format(
                       "ddd [At] hh:mm A"
                     )}
                   </p>
                   <div
                     key={msg?.id}
                     className={`flex ${
                       msg?.user_type === 0 ? "justify-end" : "justify-start"
                     }`}
                   >
                     <div
                       className={`max-w-xs p-3 rounded-lg   overflow-hidden ${
                         msg?.sender === "User"
                           ? "bg-gray-200 text-black"
                           : "bg-gray-200 text-black"
                       }`}
                     >
                       {msg?.name !== "User" && (
                         <p className="text-xs font-semibold capitalize">
                           {msg.name}
                         </p>
                       )}
                       <div>
                         {msg.isLink ? (
                           <Link
                             href={msg.messages}
                             target="_blank"
                             className="text-blue-500 underline"
                           >
                             {msg.text}
                           </Link>
                         ) : msg.image_name ? (
                           <div className="h-24 w-24 rounded mt-1">
                             <Image
                               onClick={() =>
                                 setActivePhoto(
                                   process.env.BASE_URL +
                                     "/images/" +
                                     msg?.image_name
                                 )
                               }
                               className=" h-24 w-24 rounded"
                               width={100}
                               height={100}
                               src={
                                 process.env.BASE_URL +
                                 "/images/" +
                                 msg?.image_name
                               }
                               alt="file"
                             />
                           </div>
                         ) : (
                           <p> {msg.messages} </p>
                         )}
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             {massageData?.length === 0 && (
               <div className="text-center text-xs">No messages yet.</div>
             )}
             {file && (
               <div className=" absolute bg-white rounded w-[120px] h-[120px] ">
                 <div className=" relative  z-50 w-full h-full mx-auto flex justify-center items-center">
                   <Image
                     className="w-[100px] h-[100px] mx-auto text-center rounded object-cover"
                     width={120}
                     height={120}
                     src={URL.createObjectURL(file)}
                     alt="image"
                   />
                   <IoMdClose
                     onClick={() => setFile(null)}
                     className="text-[16px] absolute -top-3 bg-white rounded-full right-0 cursor-pointer  text-red-500"
                   />
                 </div>
               </div>
             )}
           </div>

           {/* Chat Input */}
           <div className="p-2 border-t border-gray-200 bg-[#fff]">
             <div className="flex items-center">
               <input
                 type="text"
                 value={newMessage}
                 onChange={(e) => setNewMessage(e.target.value)}
                 onKeyDown={(e) => {
                   if (e.key === "Enter") {
                     e.preventDefault(); // Prevents newline in input
                     handleSend(); // Trigger the send function
                   }
                 }}
                 placeholder="Type a message..."
                 className="flex-1 p-2 rounded-lg outline-none"
               />

               <button
                 onClick={handleSend}
                 className="ml-2 bg-black text-white px-4 py-3 rounded-lg"
               >
                 <MdSend className="text-[14px]" />
               </button>
             </div>
             <div className="flex items-center gap-3 py-2">
               <button>
                 <MdOutlineInsertEmoticon className="text-[16px] text-black opacity-65" />
               </button>
               <button>
                 <label>
                   <IoMdAttach className="text-[16px] opacity-65 cursor-pointer" />
                   <input
                     type="file"
                     onChange={handleFileChange}
                     className="hidden"
                   />
                 </label>
               </button>
             </div>
           </div>
         </div>
        ) : (
          <div
          onClick={() => dispatch(liveChatToggle())}
          className=" bg-black inline-block group duration-300  cursor-pointer  mb-6 mr-5 p-3 rounded-full text-white"
        >
          <div className="flex items-center gap-1">
            <IoChatbubbleEllipsesOutline className="text-[30px]" />
            <p className="text-[16px] group-hover:block hidden duration-300 font-medium">
              Live Chat
            </p>
          </div>
        </div>
        )}
      </div>

      {activeProto && (
        <div
          className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm  z-[500]"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-center items-center h-screen w-full">
            <div className=" bg-white relative  w-[95%] h-[90vh] md:w-[600px] md:h-[55vh] p-4 flex justify-center  items-center rounded-xl">
              <Image
                width={400}
                height={600}
                className=" object-contain w-full h-full rounded-xl"
                src={activeProto}
                alt="image"
              />
              <span
                onClick={() => setActivePhoto("")}
                className="text-red-500 justify-end text-2xl  bg-white rounded-full  absolute -top-2 -right-2 cursor-pointer"
              >
                <IoCloseSharp />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChattingBox;
