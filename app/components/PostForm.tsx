import { ChangeEvent, FormEvent, useState } from "react"

const PostForm = ({ onSubmit, initialValue, label }: {
  onSubmit: any,
  initialValue: any,
  label: string
}) => {
  const [topics, setTopics] = useState({
    title: initialValue.title || "",
    describe: initialValue.describe || ""
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTopics({
      ...topics,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label: string) => (
    <div className="flex flex-col gap-1 w-[300px]">
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={topics[label.toLowerCase()]} />
    </div>
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(topics);
    setTopics({
      title: "",
      describe: ""
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('describe')}
      <button type="submit"
        className="mt-2 rounded-md bg-orange-400 text-white px-2 py-1 hover:opacity-75"
      >
        {label}
      </button>
    </form>
  )
}

export default PostForm
