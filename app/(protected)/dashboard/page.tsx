import { auth } from "@/auth"
import React from "react";
 
export default async function Page() {
  const session = await auth()
 
  if (!session) {
    return <div>Not authenticated</div>
  }
 
  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}