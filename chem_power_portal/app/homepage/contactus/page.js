import ContactForm from "@/components/ContactForm";

export default function Home() {
    return (
        <div className="p-6 max-w-3xl mx-auto" style={{ backgroundColor: '#F5F5F5' }}>
            <h1 className="text-4xl font-weight:1000 text-center">Contact Us</h1>
            <h2 className="p-1 text-5xl font-bold text-purple-700 text-center">Share your thoughts</h2>
            <p className="p-2 text-center">Drop a line through the form below an we will get back to you</p>

            <ContactForm />
        </div>
    );
}