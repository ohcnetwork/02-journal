import { Link } from "react-router-dom";

import Button from "components/Common/Button";

function Content() {
  return (
    <main className="py-1 max-w-2xl m-auto">
      <section className="px-4 mt-4">
        <header>
          <h2 className="mt-6 text-xl leading-6 font-medium text-gray-800">
            Scan a cylinder
          </h2>
          <p className="mt-2 text-sm leading-5 text-gray-600 max-w">
            You can scan the QR code on a cylinder to update it&lsquo;s status.
          </p>
        </header>
        <div className="mt-5">
          <Button
            className="text-white hover:text-white hover:no-underline"
            block
            colorType="primary"
            size="lg"
            as={Link}
            to="/user/scan"
          >
            Scan QR Code
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Content;
