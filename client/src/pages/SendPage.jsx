import { useEffect } from "react";
//import { useTasks } from "../context/SendContext";
import SendMsj from "../components/SendMsj";

function SendPage() {
  return (
    <div className="h-screen bg-gray-50">
      <SendMsj />
    </div>
  );
}

export default SendPage;
