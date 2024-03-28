"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const itemsPerPage = 10; // Change this according to your requirement

const Pagination = ({ currentPage, total_result }: any) => {
  const data = Array.from({ length: total_result }, (_, i) => `Item ${i + 1}`);

  const router = useRouter();

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  console.log(currentPage);

  const nextPage = () => {
    // setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    router.push(`?page=${currentPage + 1}`);
  };

  const prevPage = () => {
    // setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    router.push(`?page=${currentPage - 1}`);
  };

  return (
    <div className="flex gap-2 justify-center py-5">
      <button
        className="bg-white p-2 rounded"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <p className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <Link className="" key={i} href={`?page=${i + 1}`}>
            <div
              className={`${
                currentPage == i + 1 && "text-red-500"
              } bg-white p-2 rounded`}
            >
              {i + 1}
            </div>
          </Link>
        ))}
      </p>
      <button
        className="bg-white p-2 rounded"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
