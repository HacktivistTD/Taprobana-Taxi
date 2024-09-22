import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function Blog() {
  const [posts, setPosts] = useState([]); // State to hold fetched Firestore data

  // Fetch Firestore data when the component mounts
  useEffect(() => {
    const fetchExperiences = async () => {
      const db = getFirestore();
      const experiencesCollection = collection(db, 'experiences');
      const experienceSnapshot = await getDocs(experiencesCollection);
      
      // Transform Firestore data into a format similar to your posts layout
      const experienceList = experienceSnapshot.docs.map((doc) => ({
        id: doc.id,
        fullName: doc.data().fullName,
        experience: doc.data().experience,
        experienceAs: doc.data().experienceAs,
        date: doc.data().timestamp?.toDate().toLocaleDateString() || 'Unknown Date', // Get the date or fallback
      }));

      setPosts(experienceList); // Set fetched data to state
    };

    fetchExperiences();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Experiences</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Read about the experiences shared by our users.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {post.experienceAs}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {post.fullName}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
