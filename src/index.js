import ReactDom from 'react-dom'
import './index.css'

const Booklist = () => {
  return (
    <section class="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
  )
} 

const Book = () => {
  return (
    <article class="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg" 
      alt="Book" />

const Author = () => <h4>James Clear</h4>

const Title = () => <h1>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones')</h1>

ReactDom.render(
  <Booklist />, document.getElementById('root')
)