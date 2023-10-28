import { render, screen } from "@testing-library/react";
import Intro from "./intro";

test('Test "components/intro.js"', async () => {
  render(<Intro />);

  const element = screen.getByText("Next.js");
  expect(element).not.toBeNull();

  const element2 = document.createElement("div");
  expect(element2).not.toBeNull();
});
