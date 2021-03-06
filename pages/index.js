import Image from 'next/image'
import Layout from '@/components/Layout'
import Header from '@/components/Header'


// const posts = [
//       {
//         id: 1,
//         name: 'Man must explore, and this is exploration at its greatest',
//         imageUrl: '/about-bg.jpeg',
//         desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
//       },
//       {
//         id: 2,
//         name: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
//         imageUrl: '/about-bg.jpeg',
//         desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
//       },
//       {
//         id: 3,
//         name: 'Science has not yet mastered prophecy',
//         imageUrl: '/about-bg.jpeg',
//         desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
//       },
//       {
//         id: 4,
//         name: 'Failure is not an option',
//         imageUrl: '/about-bg.jpeg',
//         desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
//       },
//       {
//         id: 5,
//         name: 'Green Beanie ss',
//         imageUrl: '/about-bg.jpeg',
//         desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
//       }
//   ]

export default function Home({posts}) {
  return (
    <Layout title="Home page" description="content">
      <Header hero_title="Home page" hero_subtitle="content for subtitle" hero_bg="/home-bg.jpeg" />

      <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">

                    {posts.slice(0,5).map((post, idx) => (
                      <div key={post.id}>
                        <div className="post-preview">
                        <a href={`/blog/${post.id}`}>
                                <h2 className="post-title">{post.title}</h2>
                                <h3 className="post-subtitle">{post.body}</h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2021
                            </p>
                        </div>
                        <hr className="my-4" />
                      </div>

                    ))}
            
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

 

// export async function getStaticProps(params) {
  
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

//   //console.log(blogs)

//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }
 
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    
    revalidate: 10, // In seconds
  }
}