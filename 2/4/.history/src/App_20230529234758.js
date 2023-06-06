import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <p>Total exercises: {calculateTotalExercises(course)}</p>
        </div>
      ))}
    </div>
  );
};

const names = ({courses}) => {
  return (
    <div>
      {courses.map((course) => {
        <div key={course.id}>
          <ul>
            <li>{course.}</li>
          </ul>
        </div>
      })}
    </div>
  )
}

const calculateTotalExercises = (course) => {
  return course.parts.reduce((sum, part) => sum + part.exercises, 0);
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
