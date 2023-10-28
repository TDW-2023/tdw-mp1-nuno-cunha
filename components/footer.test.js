import { render, screen } from "@testing-library/react";
import Footer from "./footer";

test('Test "components/footer.js"', async () => {
  render(<Footer />);

  const element = screen.getByText("Read Documentation");
  expect(element).not.toBeNull();

  const element2 = document.createElement("div");
  expect(element2).not.toBeNull();
});
