"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const itemsPerPage = 10; // Change this according to your requirement

const Pagination = ({ currentPage, total_result }: any) => {
  const data = Array.from({ length: total_result }, (_, i) => `${i + 1}`);

  const router = useRouter();
  const totalPages: any = Math.ceil(data.length / itemsPerPage);
  let page;
  if (totalPages > 3) {
    page = 3;
  } else {
    page = totalPages;
  }

  const nextPage = () => {
    router.push(`?page=${currentPage + 1}`);
  };

  const prevPage = () => {
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
        {[...Array(page)].map((_, i) => (
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

        {totalPages > 3 && (
          <>
            <Link className="" href={``}>
              <div className={` bg-white p-2 rounded`}>....</div>
            </Link>
            <Link
              className=""
              key={totalPages - 1}
              href={`?page=${totalPages - 1}`}
            >
              <div
                className={`${
                  currentPage == totalPages - 1 && "text-red-500"
                } bg-white p-2 rounded`}
              >
                {totalPages - 1}
              </div>
            </Link>
            <Link className="" key={totalPages} href={`?page=${totalPages}`}>
              <div
                className={`${
                  currentPage == totalPages && "text-red-500"
                } bg-white p-2 rounded`}
              >
                {totalPages}
              </div>
            </Link>
          </>
        )}
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
