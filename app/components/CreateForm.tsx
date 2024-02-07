"use client"
import { createTopic } from "@/lib/post";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm";

const CreateForm = () => {
  const queryClient = useQueryClient();

  const createTopicMutation = useMutation({
    // dont need pass variable
    mutationFn: createTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      console.log("success bro!")
    }
  });

  const handleCreateTopic = (topics: any) => {
    createTopicMutation.mutate(topics)
  }


  return (
    <>
      <PostForm onSubmit={handleCreateTopic} initialValue={{}} label="add" />
    </>
  )
}

export default CreateForm
