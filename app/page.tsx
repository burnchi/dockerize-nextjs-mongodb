"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link';
import CreateForm from './components/CreateForm';
import { deleteTopic, fetchTopics } from '@/lib/post';


export default function Home() {
  const queryClient = useQueryClient();
  // Queries topics
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['topics'],
    queryFn: fetchTopics
  })

  const deletePostMutation = useMutation({
    mutationFn: deleteTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
    }
  });

  const handleDelTopic = (id: string) => {
    deletePostMutation.mutate(id)
  }



  if (isLoading || !data) return <div>loading...</div>
  if (isError) return `Error: ${error.message}`

  return (
    <div className="flex gap-16">
      <div>
        <h1 className='font-semibold text-lg'>Title|Describe</h1>
        <div className='flex flex-col gap-1'>
          {
            data.map((item) => <div key={item._id} className='flex justify-between items-center'>
              {item.title} | {item.describe}
              <div className=' ml-8 flex gap-2'>
                <Link href={`/${item._id}`}
                  className=' rounded-md bg-orange-400 text-white px-2 py-1 hover:opacity-75'
                >
                  edit
                </Link>
                <button className=' rounded-md bg-orange-400 text-white px-2 py-1 hover:opacity-75'
                  onClick={() => handleDelTopic(item._id)}
                >
                  del
                </button>
              </div>
            </div>)
          }
        </div>
      </div>

      <CreateForm />
    </div>
  )
}
