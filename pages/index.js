import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

// const dadPic = () => (
//   <Image
//     src="/dad_pic.png" // Route of the image file
//     //height={144} // Desired size with correct aspect ratio
//     //width={144} // Desired size with correct aspect ratio
//     alt="Dad's Pic"
//   />
// )


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Service for Scott Kleinhaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Service Day Details for Scott Kleinhaus" />
        <div>
          <Image src={'/dad_pic.png'} width={200} height={200} />
        </div>


        <h3>
          Day of Service - 4/29/2022
        </h3>
        <p>
          Time - 11:30 AM CST
        </p>
        <p>
          Location - Fort Snelling, Assembly Area 6
        </p>
        <p>
          7601 34th Avenue south, Minneapolis, Minnesota 55450
        </p>
        <p>
          Please enter the cemetery through GATE 2 (Funeral Cortege) and look for a thin brown sign on the left hand side.
        </p>
        <a href="https://www.cem.va.gov/CEM/cems/maps/ftsnelling894.pdf">Fort Snelling Map</a>
        <h3>Schedule</h3>
        <ul>
          <li>
            11:30 - meet at Fort Snelling
          </li>
          <li>
            11:45 - service begins, military honors and words by pastor
          </li>
          <li>
            12:00 - service ends, break for lunch at <a href="https://goo.gl/maps/6Zf5VXQ6AgQoEBLE7">Hoban</a>
          </li>
          <li>
            2:00 - back to Fort Snelling to pay respects at gravesite
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
