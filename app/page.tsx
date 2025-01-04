import { ExplainerCard } from "@/components/cards/Explainer";
import HandsUsingApp from "@/public/illustrations/bitmaps/HandsUsingApp.png";
import JumpingRopePerson from "@/public/illustrations/vectors/JumpingRopePerson.svg";
import StretchingPerson from "@/public/illustrations/vectors/StretchingPerson.svg";
import TriumphCumPeople from "@/public/illustrations/vectors/TriumphCupPeople.svg";
import { GetStartedButton } from "./_useClient/Buttons";

export default function Home() {
    return (
        <main className="flex flex-col mx-4 mt-4 gap-4">
            <section className="flex flex-col gap-4">
                <h2 className="self-center rounded-3xl p-3 text-6xl font-extrabold text-center bg-white border-dotted border-4 border-grey-1">
                    What is MotiMate about?
                </h2>
                <div className="flex gap-4 ">
                    <ExplainerCard
                        title="Create a fitness group"
                        paragraph="Stay connected and motivated by creating  a group with your friends! Invite your workout buddies to join you on this fitness journey, and encourage each other to crush your goals"
                        source={HandsUsingApp}
                        altText="A set of two hands. The right one holding a phone with the group-chat of the MotiMate-App running. The left hand swiping down to read new messages."
                    />
                    <ExplainerCard
                        title="Create a fitness group"
                        paragraph="Stay connected and motivated by creating  a group with your friends! Invite your workout buddies to join you on this fitness journey, and encourage each other to crush your goals"
                        source={StretchingPerson}
                        altText="A Person stretching down with their hands out straight."
                    />
                    <ExplainerCard
                        title="Share Your Success"
                        paragraph="Share your workout photos as a proof with friends in your group. Every time you send a picture, your progress bar is updated"
                        source={TriumphCumPeople}
                        altText="Two people reaching the goal of a marathon and running towards a winner cup"
                    />
                    <ExplainerCard
                        title="Penalty is your motivation!"
                        paragraph={`Send 10€ to a trusted member who manages the group fund when you don’t meet your fitness goal.
Use it for a group gathering anytime!`}
                        source={JumpingRopePerson}
                        altText="A person jumping rope"
                    />
                </div>
            </section>
            <GetStartedButton />
        </main>
    );
}
