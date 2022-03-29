import * as React from "react";
import type { NextPage } from "next";
import { socketIOFunc, NotInRoomProps } from "../components/types";
import SocketIO from "../components/socketio/socketio";
import dynamic from "next/dynamic";
import ChooseName from "../components/Multiplayer/chooseName";

const ChoosePlayer = dynamic(
    () => import("../components/Multiplayer/ChoosePlayer"),
    {
        ssr: false,
    }
);

const Game = dynamic(() => import("../components/game/game"), { ssr: false });

const MultiPlayer: NextPage = () => {
    const {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        opponentHandler,
        whoIwantToPlay,
        whoRequestMe,
        inRoom,
        handleEvent,
        multiplayerGameInfo,
        opponentInfo,
    }: socketIOFunc = SocketIO();

    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);

    return inRoom ? (
        // render when user has choosen their name
        <Game
            singlePlayer={false}
            handleEvent={handleEvent}
            multiplayerGameInfo={multiplayerGameInfo}
            opponentInfo={opponentInfo}
            myName={myInfo.myName}
        />
    ) : (
        // render when user needs to choose name
        <NotInRoom
            hasChoosenName={hasChoosenName}
            setHasChooseName={setHasChooseName}
            playersReady={playersReady}
            myInfo={myInfo}
            HandleSetName={HandleSetName}
            whoIwantToPlay={whoIwantToPlay}
            setConnect={setConnect}
            opponentHandler={opponentHandler}
            whoRequestMe={whoRequestMe}
        />
    );
};

// have to make separate function to not unloose focus of input
const NotInRoom: React.FC<NotInRoomProps> = ({
    playersReady,
    myInfo,
    HandleSetName,
    hasChoosenName,
    opponentHandler,
    setHasChooseName,
    whoIwantToPlay,
    whoRequestMe,
    setConnect,
}) => {
    return hasChoosenName ? (
        <ChoosePlayer
            playersReady={playersReady}
            myInfo={myInfo}
            opponentHandler={opponentHandler}
            whoIwantToPlay={whoIwantToPlay}
            whoRequestMe={whoRequestMe}
        />
    ) : (
        <ChooseName
            HandleSetName={HandleSetName}
            myInfo={myInfo}
            setHasChooseName={setHasChooseName}
            setConnect={setConnect}
        />
    );
};

export default MultiPlayer;
