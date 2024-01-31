"use client";
import React, { useEffect, useState } from "react";
import UserBar from "@/components/misc/UserBar";
import nft from "../../../../public/nfttoken.png";
import cert from "../../../../public/certificate.png";
import badge from "../../../../public/badge.png";
import Image from "next/image";
import Link from "next/link";
import Moralis from "moralis";
import axios from "axios";
import response from "../../../utils/response2.json";

export default function page() {
  const [allNFT, setAllNFT] = useState([]);
  let [total, setTotal] = useState(0);
  let [generic, setGeneric] = useState(0);
  let [nongen, setNonGen] = useState(0);
  let [imgUrl, setImgUrl] = useState("");
  const [imgLink, setImgLink] = useState(nft);
  const walletAddress = "0x17B42894364D09af01e7647526225EC23E1f1e3b";
  const chainId = "0x13881";

  let url = `https://deep-index.moralis.io/api/v2/${walletAddress}/nft?chain=${chainId}&format=decimal&exclude_spam=false&normalizeMetadata=false&media_items=false`;

  // async function getNFTdata() {
  //   try {
  //     await axios
  //       .get(url, {
  //         headers: {
  //           accept: "application/json",
  //           "X-API-Key":
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjBiOWVmZTMwLTMwZGUtNDczMS1iNmVjLTRiM2UyNDMzYjllNyIsIm9yZ0lkIjoiMzU2OTgzIiwidXNlcklkIjoiMzY2ODk0IiwidHlwZUlkIjoiMDQxZTc4YzUtMmYyMS00ODQ2LTlkNWYtZTljYTE5M2Q2MTFiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTQ2MDE4MDEsImV4cCI6NDg1MDM2MTgwMX0.h5u7hWTbbipx3Z65Yd7WKKiet2GL7mGXjwYzvfOzlHQ",
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data.result);
  //         setAllNFT(response.data.result);
  //       })
  //       .catch((err) => {
  //         console.log("error :", err);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const getNFTDetails = async () => {
    // let imgNFT = (await allNFT[0]?.metadata) ? allNFT[0]?.metadata : "{}";
    // const imgdata = JSON.parse(imgNFT);
    // const imghash = imgdata?.image?.substring(7);
    const imghash = "QmbvGSXJyN2JY4ECafvHnxZDtMEAQFeuzQSaevZpMqSr4t";

    setImgLink(
      `https://jocky-boa-transformer-polygon.infura-ipfs.io/ipfs/${imghash}`
    );

    response.map((key, index) => {
      const metadata = JSON.parse(key.metadata);
      // console.log("Metadat :->", metadata)
      if (key.symbol === "TBTest") {
        setTotal(++total);
        if (metadata?.description === "Generic Token") {
          setGeneric(++generic);
        }
        if (metadata?.description === "Non-Generic Token") {
          setNonGen(++nongen);
        }
      }
    });
  };

  useEffect(() => {
    getNFTDetails();
  }, []);

  // useEffect(() => {
  //   getNFTdata();
  // }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mt-1 text-title">My Rewards</div>
        <div>
          <UserBar />
        </div>
      </div>

      <div className="outer-container">
        <div className="sub-title2">Your Sustainability Rewards</div>
        <div className="line"></div>

        <div className="row">
          <div className="col-lg-6">
            <div className="p-2">
              <Link className="tdn" role="button" href="/user/rewards/nft">
                <div className="reward-card">
                  <div className="rc-head">NFTs</div>
                  <div className="mx-4 line"></div>
                  <div className="row align-items-center justify-content-center text-center px-2 mb-4 mx-4">
                    <div className="col-lg-8 ">
                      <div className="">
                        <span className="rc-text">Generic Token</span>
                        <span className="text-two">{`(${generic})`}</span>
                      </div>
                      <div className="">
                        <span className="rc-text">Non-Generic Token</span>
                        <span className="text-two">{`(${nongen})`}</span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <Image
                        src={imgLink}
                        height={145}
                        width={145}
                        className="rc-img-adj"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-2">
              <div className="reward-card">
                <div className="rc-head">Certificates</div>
                <div className="mx-4 line"></div>
                <div className="row align-items-center text-center px-2 mb-4 g-4">
                  <div className="col-lg-7 justify-content-center">
                    <div className="">
                      <span className="rc-text">6 Cerificates</span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <Image src={cert} width={145} className="rc-img-adj" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-2">
              <div className="reward-card">
                <div className="rc-head">Badges</div>
                <div className="mx-4 line"></div>
                <div className="row align-items-center text-center px-2 mb-4 g-4">
                  <div className="col-lg-7 justify-content-center">
                    <div className="">
                      <span className="text-two">1</span>
                      <span className="mx-2 rc-text">Out of</span>
                      <span className="text-two">5</span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <Image src={badge} width={140} className="rc-img-adj" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
