
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3000'

interface TopicsProps {
  id?: string
  title: string,
  describe: string
}

export async function fetchTopics() {
  const res = await fetch(`${apiUrl}/api/topics`)
  return res.json()
}

export async function createTopic(topics: TopicsProps) {
  const res = await fetch(`${apiUrl}/api/topics`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(topics)
  })
  return res.json()
}

export async function fetchTopic(id: string) {
  const response = await fetch(`http://127.0.0.1:3000/api/topics/${id}`);
  return response.json()
}

export async function updateTopic(updatedPost: TopicsProps) {
  const response = await fetch(`http://localhost:3000/api/topics/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPost)
  });
  return response.json()
}

export async function deleteTopic(id: string) {
  const response = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
    method: "DELETE",
  });
  return response.json()
}

