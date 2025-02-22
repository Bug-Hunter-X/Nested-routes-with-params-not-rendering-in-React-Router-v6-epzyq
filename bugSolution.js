import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }

function ContactDetail() {
  const [searchParams] = useSearchParams();
  const contactId = searchParams.get('id');
  return <h1>Contact Detail {contactId}</h1>;
}
export default App;