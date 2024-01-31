"use client";
import React from "react";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { RoundIcon } from "@/components/elements/Button";
import UserBar from "@/components/misc/UserBar";
import Image from "next/image";
import nft from "../../../../../public/nfttoken.png";
import logo from "../../../../../public/polygon.png";
import response from "../../../../utils/response2.json";
import { CHAIN_ID } from "../../../../config/env";

export default function page() {
  // const expired = true;

  // console.log("response :", response)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <Link className="tdn" href="/user/rewards">
              <RoundIcon icon={BiChevronLeft} size={30} />
            </Link>
          </div>
          <div className="mt-1 mx-2 text-title">My Rewards/NFTs</div>
        </div>
        <div>
          <UserBar />
        </div>
      </div>

      <div className="outer-container">
        <div className="sub-title2">Your NFT Portfolio</div>
        <div className="line"></div>

        <div className="row justify-content-center g-3">
          {response.map((key, index) => {
            if (key.symbol === "TBTest") {
              const metadata = JSON.parse(key.metadata);
              const expired = metadata?.expirationTime == 0 ? false : true;
              // console.log("descripton :", metadata?.description)
              const generic =
                metadata?.description === "Generic Token" ? true : false;
              // console.log("expiration :", metadata?.expirationTime, expired)
              const imghash = metadata?.image?.substring(7);
              return (
                <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="">
                    <Link
                      href={{
                        pathname: "/user/rewards/nft/details",
                        query: {
                          name: metadata.name,
                          partner: metadata.partnername,
                          description: metadata.description,
                          expiry: expired,
                          validity: metadata.expirationTime,
                          quantity: key.amount,
                          address: key.token_address,
                          tokenId: key.token_id,
                          standard: key.contract_type,
                          chain: CHAIN_ID,
                          date: key.last_token_uri_sync,
                          image: `https://jocky-boa-transformer-polygon.infura-ipfs.io/ipfs/${imghash}`,
                        },
                      }}
                    >
                      <div
                        className={`nft-card ${expired ? "nft-expired" : ""}`}
                      >
                        <Image
                          className="nft-img"
                          src={
                            imghash
                              ? `https://jocky-boa-transformer-polygon.infura-ipfs.io/ipfs/${imghash}`
                              : nft
                          }
                          alt="nft"
                          fill
                        />
                        <div className="nft-chain">
                          <Image src={logo} width={40} alt="pol" />
                        </div>
                        <div className="nft-quantity">{`x${key.amount}`}</div>
                        <div className="nft-title">
                          {expired
                            ? "Expired Token"
                            : generic
                            ? "Generic Token"
                            : "Non-Generic Token"}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            }
          })}

          {/* <div className="col-lg-4 col-md-6">
            <div className="p-3">
              <div className="nft-card">
                <Image className='nft-img' src={nft} />
                <div className="nft-chain">
                  <Image src={logo} width={40} />
                </div>
                <div className="nft-quantity">
                  x2
                </div>
                <div className="nft-title">
                  Non Generic Token
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="p-3">
              <div className="nft-card nft-expired">
                <Image className='nft-img' src={nft} />
                <div className="nft-chain">
                  <Image src={logo} width={40} />
                </div>
                <div className="nft-quantity">
                  x2
                </div>
                <div className="nft-title">
                  Expired Token
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
