"use client";

import { useParams } from "next/navigation";

// /service-details/3 -> 3 (id na ho to pehla item)
export default function useItemId() {
  const params = useParams();
  const id = Number(params?.id);
  return id > 0 ? id : 1;
}
