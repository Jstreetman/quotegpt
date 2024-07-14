import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat, Message } from "ai/react";

export function UserInput() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  console.log(messages);
  console.log(input);

  return (
    <div className="grid w-full gap-2">
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Enter your message..."
          value={input}
          onChange={handleInputChange}
        />
        <Button>Send message</Button>
      </form>
    </div>
  );
}
