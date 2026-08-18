"use client";

export default function WhatsAppButton() {
  const phone = "6282341964708";

  const handleClick = () => {
    const nama = encodeURIComponent("Nama Lengkap: \nEmail: \nPesan: ");
    const url = `https://wa.me/${phone}?text=${nama}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.94 9.94 0 0 1-5.06-1.375l-.36-.215-4.572 1.076 1.1-4.463-.234-.374A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-3.547 5.277c-.193 0-.507.072-.773.358-.265.287-1.012.988-1.012 2.41s1.035 2.797 1.18 2.99c.143.193 2.01 3.227 4.965 4.394 2.452.967 2.955.775 3.488.727.533-.048 1.72-.703 1.963-1.383.242-.68.242-1.264.17-1.383-.072-.12-.265-.193-.556-.338-.29-.145-1.72-.85-1.986-.947-.265-.097-.458-.145-.65.144-.193.29-.747.948-.916 1.14-.168.193-.337.218-.627.073-.29-.145-1.224-.451-2.332-1.44-.862-.768-1.443-1.717-1.613-2.007-.168-.29-.018-.447.127-.59.13-.13.29-.338.435-.507.143-.17.19-.29.286-.483.096-.193.048-.362-.024-.507-.072-.145-.637-1.574-.88-2.15-.23-.555-.468-.467-.65-.467Z" />
      </svg>
    </button>
  );
}
