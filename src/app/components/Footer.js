function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
