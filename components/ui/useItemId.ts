"use client";

import { useParams } from "next/navigation";

// /service-details/3 
export default function useItemId() {
  const params = useParams();
  const id = Number(params?.id);
  return id > 0 ? id : 1;
}
