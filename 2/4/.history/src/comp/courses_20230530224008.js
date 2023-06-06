import React from 'react';

const CourseList = ({ courses }) => {

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                <p>{part.name} - {part.exercises}</p>
              </li>
            ))}
          </ul>
          <h4>Total exercises: {calculateTotalExercises(course)}</h4>
        </div>
      ))};
    </>
  )
}

const calculateTotalExercises = (course) => {
  return course.parts.reduce((sum, part) => sum + part.exercises, 0);
};