import Profile from "@/components/organism/Profile/Profile";
import AllPosts from "@/components/organism/AllPosts/AllPosts";

const DUMMY_DATA = [
  {
    id: 0,
    image: '/images/profile/profile.jpg',
    title: '프로젝트1',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: true
  },
  {
    id: 1,
    image: '/images/profile/profile.jpg',
    title: '프로젝트2',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: true
  },
  {
    id: 2,
    image: '/images/profile/profile.jpg',
    title: '프로젝트3',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: true
  },
  {
    id: 3,
    image: '/images/profile/profile.jpg',
    title: '프로젝트4',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: false
  },
  {
    id: 4,
    image: '/images/profile/profile.jpg',
    title: '프로젝트5',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: false
  },
  {
    id: 5,
    image: '/images/profile/profile.jpg',
    title: '프로젝트6',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: false
  },
  {
    id: 6,
    image: '/images/profile/profile.jpg',
    title: '프로젝트7',
    description: '00한 프로젝트',
    createAt: '2023.03.09',
    featured: false
  },
]

export default function MainPage() {
  return (
    <>
      <Profile/>
      <AllPosts title='Projects' posts={DUMMY_DATA}/>
      <AllPosts title='Records' posts={DUMMY_DATA}/>
    </>
  );
}
