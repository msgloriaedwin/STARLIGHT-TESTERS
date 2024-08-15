"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import featured from "@/public/assets/images/featured.svg";

interface BlogPost {
  title: string;
  image: string;
  timestamp?: string;
  readTime?: string;
  showDetails?: boolean;
  isFeatured?: boolean;
  slug: string;
  excerpt?: string;
}

const BlogCard: FC<BlogPost> = ({
  title,
  image,
  timestamp,
  readTime,
  showDetails = false,
  isFeatured = false,
  slug,
  excerpt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => !isFeatured && setIsHovered(true)}
      onMouseLeave={() => !isFeatured && setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md flex-1">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className={`object-cover w-full ${
            isFeatured ? "h-[380px]" : "h-[280px]"
          }`}
        />
        {isFeatured && (
          <div className="absolute top-0 right-0 m-8">
            <Image
              src={featured}
              alt="Featured"
              width={100}
              height={100}
              className="rounded-full border-2 border-white shadow-lg"
            />
          </div>
        )}
        {!isFeatured && (
          <div
            className={`absolute inset-0 bg-[#00658B] p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
              isHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              {(timestamp || readTime) && (
                <p className="text-sm text-gray-200 mb-2">
                  {timestamp} {timestamp && readTime && "•"} {readTime}
                </p>
              )}
              {excerpt && <p className="text-sm text-white">{excerpt}</p>}
            </div>
            <Link
              href={`/blog/${slug}`}
              className="text-white hover:underline self-start mt-4"
            >
              Read More
            </Link>
          </div>
        )}
        {isFeatured && (
          <div className="absolute inset-0 p-4 flex bg-gradient-to-t from-black to-transparent flex-col justify-end">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            {(timestamp || readTime) && (
              <p className="text-sm text-gray-200 mb-2">
                {timestamp} {timestamp && readTime && "•"} {readTime}
              </p>
            )}
            {excerpt && <p className="text-sm text-white mb-4">{excerpt}</p>}
            <Link
              href={`/blog/${slug}`}
              className="text-white hover:underline self-start"
            >
              Read More
            </Link>
          </div>
        )}
      </div>
      {!showDetails && !isFeatured && (
        <Link href={`/blog/${slug}`}>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800 hover:underline">
              {title}
            </h3>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BlogCard;
