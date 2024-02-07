"use client"
import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTopic, updateTopic } from '@/lib/post'
import PostForm from './PostForm'
import { useRouter } from 'next/navigation';

const EditForm = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter()
  // get selected topics value
  const { data: topics, isLoading, isError } = useQuery({
    queryKey: ['topics', id],
    queryFn: () => fetchTopic(id)
  })

  // update selected topics value
  const updatePostMutation = useMutation({
    mutationFn: updateTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      router.push('/')
    }
  })

  const handleSubmit = (updatedPost: any) => {
    updatePostMutation.mutate({ id, ...updatedPost })
  }

  if (isLoading) return "Loading"
  if (isError) return "error"

  return (
    <>
      <PostForm onSubmit={handleSubmit} initialValue={topics} label='update' />
    </>
  )
}

export default EditForm
