import Card from 'react-bootstrap/Card';

function CourseCard({key, course}) {
  return (
    <Card style={{ width: '20rem' }} key={key}>
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
        <Card.Link href="#">Go to Course</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;