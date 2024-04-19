"use client"
import UseFetch from "@/hook/useFetch";

const page = () => {
  const { data, isloading, refresh } = UseFetch();
  console.log(data)
  return (
    <div>
      App
    </div>
  )
}

export default page
