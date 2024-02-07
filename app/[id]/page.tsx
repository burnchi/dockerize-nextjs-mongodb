import EditForm from '../components/EditForm'

const EditPage = ({ params }: {
  params: {
    id: string
  }
}) => {
  const { id } = params
  return (
    <>
      <EditForm id={id} />
    </>
  )
}

export default EditPage
