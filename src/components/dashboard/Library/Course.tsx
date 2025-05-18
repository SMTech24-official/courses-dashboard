import CourseCard from "./CourseCard"


const Course = () => {
  return (
    <section className="mb-6 rounded-xl bg-white p-6 shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <CourseCard key={item} />
        ))}
      </div>
    </section>
  )
}

export default Course
