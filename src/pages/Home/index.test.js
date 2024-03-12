import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import ServiceCard from "../../components/ServiceCard";
import PeopleCard from "../../components/PeopleCard";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When the page is loaded", () => {
  it("a list of events is displayed", () => {
    <EventList />
  })
  it("a list a people is displayed", () => {
    <PeopleCard />
  })
  it("a footer is displayed", () => {
   <footer />
  })
  it("an event card, ,with the last event is displayed", () => {
   <ServiceCard />
  })
});
