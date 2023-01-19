import Card from 'components/Card';
import dayjs from 'dayjs';
import data from 'data/posts';

export default function Home({posts}) {
  return (
    <main className="container">

      {
        posts.map(item=> <Card 
           
            key={item.id}

            title={item.title} 

            tag={item.tags[0]} 
            
            description={item.description} 

            author={item.author}

            date={ dayjs(item.date).format('DD MMMM, YYYY')}

            image={item.image}
          
          />)
      }
      
    </main>
  )
}

export async function getStaticProps(context) {



  return {
    props: { posts:data },
  }
}