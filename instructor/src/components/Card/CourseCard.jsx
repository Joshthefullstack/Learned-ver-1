import Card from 'react-bootstrap/Card';

function CourseCard({key, course, setShowCourse, setSelectedCourse}) {
  return (
    <Card style={{ width: '20rem' }} key={key}>
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
        <Card.Link href="#" onClick={() => {setShowCourse(true); setSelectedCourse(course)}}>Go to Course</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;