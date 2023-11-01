import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../pages/Home";
import { MetaMaskProvider } from "../contexts/MetaMaskContext";

describe("Home Page", () => {
  it("should render the Connect to MetaMask button", () => {
    render(
      <MetaMaskProvider>
        <Home />
      </MetaMaskProvider>
    );
    const connectButton = screen.getByText("Connect to MetaMask");
    expect(connectButton).toBeInTheDocument();
  });

  it("should connect to MetaMask when the button is clicked", async () => {
    const useMetaMask = require("../MetaMaskContext");
    const useMetaMaskSpy = jest.spyOn(useMetaMask, "useMetaMask");
    useMetaMaskSpy.mockReturnValue({
      isMetamaskConnected: false,
      connectToMetamask: async () => {},
      disconnectFromMetamask: async () => {},
    });

    render(
      <MetaMaskProvider>
        <Home />
      </MetaMaskProvider>
    );

    const connectButton = screen.getByText("Connect to MetaMask");
    fireEvent.click(connectButton);

    const disconnectButton = screen.getByText("Disconnect");
    expect(disconnectButton).toBeInTheDocument();
  });
});
