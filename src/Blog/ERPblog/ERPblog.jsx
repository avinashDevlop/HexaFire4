import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaBook, 
  FaClock, FaClipboardCheck, FaPencilAlt, FaMoneyBillWave, 
  FaBus, FaBullhorn, FaEnvelope,FaUserFriends
} from 'react-icons/fa';
import adminDashboard from './images/adminDashboard.png'
import student from './images/student.png'
import Teacher from './images/Teacher.png'
import Library from './images/Library.png'
import timeTable from './images/timeTable.png'
import Attendence from './images/Attendence.png'
import Exam from './images/Exam.png'
import Finance from './images/Finance.png'
import Transport from './images/Transport.png'
import Notice from './images/Notice.png'
import Message from './images/Message.png'
import Account from './images/Account.png' 
const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const FeatureIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ScreenshotPlaceholder = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border-radius: 8px;
`;

const SchoolManagementERPBlog = () => {
  return (
    <BlogContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Comprehensive School Management ERP: Revolutionizing Education Administration
      </Title>

      <Paragraph>
        In the digital age, efficient school management is crucial for providing quality education. Our School Management ERP system is a comprehensive solution designed to streamline administrative tasks, enhance communication, and improve overall educational outcomes. Let's explore the extensive features that make our system stand out.
      </Paragraph>

      <Subtitle>Key Features of Our School Management ERP</Subtitle>

      <FeatureList>
        <FeatureItem>
          <FeatureIcon><FaGraduationCap /></FeatureIcon>
          Multiple User Dashboards (Admin, Teacher, Student, Parent)
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaUserGraduate /></FeatureIcon>
          Student Management (Admission, Details, Promotion)
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaChalkboardTeacher /></FeatureIcon>
          Teacher Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaBook /></FeatureIcon>
          Library Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaClock /></FeatureIcon>
          Timetable Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaClipboardCheck /></FeatureIcon>
          Attendance Tracking
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaPencilAlt /></FeatureIcon>
          Examination and Results Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaMoneyBillWave /></FeatureIcon>
          Finance Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaBus /></FeatureIcon>
          Transport Management
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaBullhorn /></FeatureIcon>
          Notice Board
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaEnvelope /></FeatureIcon>
          Messaging System
        </FeatureItem>
        <FeatureList>
        <FeatureItem>
          <FeatureIcon><FaUserGraduate /></FeatureIcon>
          Student Accounts: Personalized logins for accessing grades, assignments, and schedules
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaUserFriends /></FeatureIcon>
          Parent Accounts: Dedicated portals for parents to monitor their child's progress
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaChalkboardTeacher /></FeatureIcon>
          Teacher Accounts: Secure access to class management tools and student information
        </FeatureItem>
      </FeatureList>
      </FeatureList>

      <Subtitle>1. User Dashboards</Subtitle>
      <Paragraph>
        Our ERP provides tailored dashboards for different user roles:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Admin Dashboard: Complete overview and control of the entire system</FeatureItem>
        <FeatureItem>Teacher Dashboard: Class schedules, student performance, attendance management</FeatureItem>
        <FeatureItem>Student Dashboard: Timetables, assignments, exam schedules, results</FeatureItem>
        <FeatureItem>Parent Dashboard: Ward's performance, attendance, and school communications</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
      <img src={adminDashboard} alt="Admin Dashboard" />
      </ScreenshotPlaceholder>

      <Subtitle>2. Student Management</Subtitle>
      <Paragraph>
        Comprehensive student management features include:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Student Admission: Streamlined process for new student registration</FeatureItem>
        <FeatureItem>Student Details: Centralized database for student information</FeatureItem>
        <FeatureItem>Student Promotion: Easy year-end promotion process</FeatureItem>
        <FeatureItem>All Students View: Quick access to entire student body information</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
      <img src={student} alt="Student" />
      </ScreenshotPlaceholder>

      <Subtitle>3. Teacher Management</Subtitle>
      <Paragraph>
        Efficient teacher administration tools:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Add Teachers: Simple interface for onboarding new staff</FeatureItem>
        <FeatureItem>Teacher Details: Comprehensive profiles for each teacher</FeatureItem>
        <FeatureItem>All Teachers View: Overview of entire teaching staff</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
      <img src={Teacher} alt="Teacher" />
        </ScreenshotPlaceholder>

      <Subtitle>4. Library Management</Subtitle>
      <Paragraph>
        Digital library system for efficient resource management:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Add Library Books: Easy cataloging of new acquisitions</FeatureItem>
        <FeatureItem>Library Books View: Search and manage the entire book collection</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
      <img src={Library} alt="Library" />
      </ScreenshotPlaceholder>

      <Subtitle>5. Timetable Management</Subtitle>
      <Paragraph>
        Flexible scheduling tools:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Add Timetable: Create and modify class schedules</FeatureItem>
        <FeatureItem>Timetable View: Easy access to schedules for all classes</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
      <img src={timeTable} alt="Time Table" />
      </ScreenshotPlaceholder>

      <Subtitle>6. Attendance Management</Subtitle>
      <Paragraph>
        Digital attendance tracking for improved accuracy and reporting.
      </Paragraph>
      <ScreenshotPlaceholder>
        <img src={Attendence} alt="Attendance" />
      </ScreenshotPlaceholder>

      <Subtitle>7. Examination and Results Management</Subtitle>
      <Paragraph>
        Comprehensive exam management:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Exam Schedule: Plan and communicate examination timetables</FeatureItem>
        <FeatureItem>Add Exam Schedule: Flexible tool for creating exam schedules</FeatureItem>
        <FeatureItem>Add Results: Efficient input of student performance data</FeatureItem>
        <FeatureItem>View Results: Easy access to student grades and performance analytics</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
        <img src={Exam} alt="Exam" />
      </ScreenshotPlaceholder>

      <Subtitle>8. Finance Management</Subtitle>
      <Paragraph>
        Robust financial tools for tracking fees, expenses, and generating reports.
      </Paragraph>
      <ScreenshotPlaceholder>
        <img src={Finance} alt="Finance" />
      </ScreenshotPlaceholder>

      <Subtitle>9. Transport Management</Subtitle>
      <Paragraph>
        Efficiently manage school transportation routes, schedules, and vehicle maintenance.
      </Paragraph>
      <ScreenshotPlaceholder>
        <img src={Transport} alt='Transport' />
      </ScreenshotPlaceholder>

      <Subtitle>10. Notice Board</Subtitle>
      <Paragraph>
        Central communication hub for sharing important announcements with the entire school community.
      </Paragraph>
      <ScreenshotPlaceholder>
        <img src={Notice} alt='Notice' />
      </ScreenshotPlaceholder>

      <Subtitle>11. Messaging System</Subtitle>
      <Paragraph>
        Integrated messaging platform for seamless communication between administrators, teachers, students, and parents.
      </Paragraph>
      <ScreenshotPlaceholder>
        <img src={Message} alt='Message' />
      </ScreenshotPlaceholder>

      <Subtitle>12. Account Management</Subtitle>
      <Paragraph>
        Our ERP system provides robust account management features for students, parents, and teachers, ensuring secure access and personalized experiences:
      </Paragraph>
      <Paragraph>
        Key features of our account management system include:
      </Paragraph>
      <FeatureList>
        <FeatureItem>Secure Authentication: Robust login system with password encryption</FeatureItem>
        <FeatureItem>Role-Based Access Control: Ensuring users only access information relevant to their role</FeatureItem>
        <FeatureItem>Profile Management: Users can update their personal information and preferences</FeatureItem>
        <FeatureItem>Password Recovery: Self-service password reset functionality</FeatureItem>
        <FeatureItem>Activity Logging: Track user actions for security and auditing purposes</FeatureItem>
      </FeatureList>
      <ScreenshotPlaceholder>
        <img src={Account} alt='Account' />
      </ScreenshotPlaceholder>

      <Subtitle>Benefits of Our School Management ERP</Subtitle>

      <Paragraph>
        1. <strong>Improved Efficiency:</strong> Automate administrative tasks, freeing up time for educators to focus on teaching.
      </Paragraph>
      <Paragraph>
        2. <strong>Enhanced Communication:</strong> Facilitate better communication between schools, teachers, students, and parents.
      </Paragraph>
      <Paragraph>
        3. <strong>Data-Driven Decisions:</strong> Gain insights from comprehensive reports to make informed decisions about curriculum and teaching methods.
      </Paragraph>
      <Paragraph>
        4. <strong>Increased Transparency:</strong> Provide parents with real-time access to their child's academic progress and attendance.
      </Paragraph>
      <Paragraph>
        5. <strong>Scalability:</strong> Our system grows with your institution, easily accommodating more students, teachers, and new features as needed.
      </Paragraph>
      <Paragraph>
        6. <strong>Centralized Information:</strong> All school data is stored in one secure, easily accessible location.
      </Paragraph>
      <Paragraph>
        7. <strong>Time and Cost Savings:</strong> Reduce paperwork and manual processes, leading to significant time and cost savings.
      </Paragraph>

      <Subtitle>Implementation and Support</Subtitle>

      <Paragraph>
        We offer comprehensive support throughout the implementation process, including:
        - System customization to meet your school's specific needs
        - Data migration from existing systems
        - Training for administrators, teachers, and staff
        - Ongoing technical support and system updates
      </Paragraph>

      <Paragraph>
        Our School Management ERP is more than just a software solution; it's a comprehensive tool designed to transform the way educational institutions operate. By streamlining administrative tasks, improving communication, and providing valuable insights, our system empowers schools to focus on what really matters: providing quality education to students.
      </Paragraph>

      <Paragraph>
        Ready to revolutionize your school's management system? Contact us today for a demo and see how our School Management ERP can benefit your institution.
      </Paragraph>
    </BlogContainer>
  );
};

export default SchoolManagementERPBlog;