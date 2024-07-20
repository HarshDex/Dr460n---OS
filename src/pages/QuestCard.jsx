import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js"; // Import CryptoJS
import { animateScroll as scroll } from "react-scroll";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const { name } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 150, smooth: true });
  };
  // my decrption key
  const decryptionKey = "absd*U#(Eajdn";

  // Encrypted data obtained from pre-encryption step
  const encryptedData =
    "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"

  // Decrypt the encrypted data using AES decryption
  const bytes = CryptoJS.AES.decrypt(encryptedData, decryptionKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // Use the decrypted data as your questData object
  const [questData, setQuestData] = useState(decryptedData);

  const selectedQuest = questData[name.toLowerCase()];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!selectedQuest) {
    // Handle invalid difficulty level
    return <div>Invalid level name</div>;
  }

  const onInputClick = (e) => {
    e.stopPropagation();
  };

  const onAnswerSubmit = async () => {
    setLoading(true);
    scrollToTop();

    console.log("name: ", name);

    try {
      const response = await fetch(
        "https://niqqud.com/ctfVerify.php?question=" +
          name +
          "&answer=" +
          userAnswer
      );
      const data = await response.json();

      if (data.status === "correct") {
        toast.success("Correct Answer!!");
        setUserAnswer("");
      } else if (data.status === "incorrect") {
        toast.error("Wrong Answer!!");
        setUserAnswer("");
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
};

  const onDownloadClick = (e) => {
    e.stopPropagation();
    scrollToTop();
    console.log("Downloaded!", e);
    toast.success("File Downloaded! Check your downloads folder");
  };

  console.log("decryptedData: ", decryptedData);

  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full min-h-screen">
      <div className="h-full w-full container grid grid-cols-1 items-center justify-center">
        <ToastContainer />
        <div className="w-full h-full flex flex-col justify-center">
          <div className="border h-full w-full border-[#fafafa] p-5 mt-5 mb-5">
            <div className="flex-col">
              <img
                src={selectedQuest.img}
                alt="profile-photo"
                className="w-full h-36 sm:h-64 object-cover mb-2 rounded-sm"
              />
              <h1 className="text-2xl font-bold">{`${selectedQuest.title} (${selectedQuest.points}  Points)`}</h1>
            </div>

            <div className="border border-[#fafafa] p-3 space-y-3">
              <div className="flex flex-col gap-4">
                <h1>Download - File</h1>
                <div className="mb-2 sm:mb-0">
                  {questData[name].downloadable ? (
                    <button
                      onClick={() => openInNewTab(questData[name].fileDownload)}
                      className="px-5 py-4 bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >`  `
                      {questData[name].fileName}
                    </button>
                  ) : (
                    <Link
                      to={questData[name].fileDownload}
                      onClick={onDownloadClick}
                      className="px-5 py-4 bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >
                      {questData[name].fileName}
                    </Link>
                  )}
                </div>
                <div className="flex gap-3 flex-col mt-2">
                  <div>
                    <p className="font-semibold">{selectedQuest.description}</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setUserAnswer(e.target.value)}
                      value={userAnswer}
                      onClick={onInputClick}
                      placeholder="Type your answer"
                      className="py-3 pl-2 w-full hover:transition-all hover:duration-75 hover:ease-in-out text-black rounded-sm"
                    />
                  </div>
                  <div>
                    <button
                      onClick={onAnswerSubmit}
                      className="px-3 py-3 w-full bg-gray-800 rounded text-white"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
