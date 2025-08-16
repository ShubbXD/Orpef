import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Small Badge */}
          <span className="px-4 py-2 text-base border border-blue-300 rounded-full bg-blue-100/60 text-blue-700 font-medium">
            Reach Out To Us
          </span>
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-center mt-2 text-blue-700 bg-blue-100 px-6 py-4 rounded-lg shadow inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 bg-clip-text text-transparent">
              We’d love to Hear From You
            </span>
          </h1>
          <p className="text-center mt-2 text-gray-700 max-w-lg text-lg">
            Or just reach out manually at{" "}
            <a
              href="mailto:contact@orpef.org"
              className="text-blue-600 hover:underline font-semibold"
            >
              contact@orpef.org
            </a>
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Email */}
          <div className="p-6 rounded-xl border border-blue-200 bg-white/70 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-out">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="text-blue-600 bg-blue-100 p-2.5 aspect-square rounded-full size-12"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-lg font-bold text-gray-900">Email Support</p>
            <p className="text-gray-600 mt-1 mb-4">
              Our team can respond in real time.
            </p>
            <a
              href="mailto:support@orpef.org"
              className="text-blue-600 font-semibold hover:underline"
            >
              support@orpef.org
            </a>
          </div>

          {/* Office */}
          <div className="p-6 rounded-xl border border-green-200 bg-white/70 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-out">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="text-green-600 bg-green-100 p-2.5 aspect-square rounded-full size-12"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75zm-13.875-4.5h9.75v14.25h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-4.5A1.125 1.125 0 0 0 7.125 15v4.125h-1.5zm6 14.25h-2.25v-3h2.25zM6.75 7.5a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 7.5m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 11.25 7.5m-4.5 3.75a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 11.25m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-lg font-bold text-gray-900">Visit Our Office</p>
            <p className="text-gray-600 mt-1 mb-4">Meet us in person.</p>
            <span className="text-green-600 font-semibold">
              Bhubaneswar, Odisha, India
            </span>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-xl border border-blue-200 bg-white/70 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-out">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="text-blue-600 bg-blue-100 p-2.5 aspect-square rounded-full size-12"
                width="28"
                height="28"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-lg font-bold text-gray-900">Call Us Directly</p>
            <p className="text-gray-600 mt-1 mb-4">Available during working hours.</p>
            <span className="text-blue-600 font-semibold">
              +91 98765 43210
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
