import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Frame48096505ColumnSix from "components/Frame48096505ColumnSix";

import { CloseSVG } from "../../assets/images";

// const componentTwentyFourOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];
// const viewMoreOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];
const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Frame48096505Page = () => {
  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto pb-[84px] w-full">
        <header className="bg-yellow-50 flex md:flex-col md:gap-5 items-center justify-center md:px-5 px-[162px] py-7 w-full">
          <Img
            className="h-[52px] w-56"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
          <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-center justify-end w-full">
            <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
              <Button
                className="cursor-pointer font-medium min-w-[97px] text-center text-lg"
                shape="square"
                variant="outline"
              >
                Home
              </Button>
              <button
                className="text-gray-900 text-lg w-auto"
                size="txtOutfitRegular18"
              >
                Plans
              </button>
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <button
                  className="text-gray-900 text-lg w-auto"
                  size="txtOutfitRegular18"
                >
                  Help
                </button>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[105px] text-center text-lg"
              shape="round"
              color="teal_900"
            >
              Login
            </Button>
          </div>
        </header>
        <div className="h-[1022px] md:h-[1392px] sm:h-[2522px] max-w-[1938px] mt-[104px] mx-auto md:px-5 relative w-full">
          <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] overflow-auto w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image35.png"
                      alt="imageThirtyFive"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image35.png"
                      alt="imageThirtyFive"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-52 md:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
                      src="images/img_image36.png"
                      alt="imageThirtySix"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image32.png"
                      alt="imageThirtyTwo"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image22.png"
                      alt="imageTwentyTwo"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image32.png"
                      alt="imageThirtyTwo"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image34.png"
                      alt="imageThirtyFour"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image34.png"
                      alt="imageThirtyFour"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image34.png"
                      alt="imageThirtyFour"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image22.png"
                      alt="imageTwentyTwo"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[198px] md:h-auto object-cover w-full"
                      src="images/img_image32.png"
                      alt="imageThirtyTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[66px] h-full inset-[0] items-center justify-center m-auto p-4 w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-amber-600 w-auto"
                  size="txtOutfitSemiBold52"
                >
                  Maangalyam: Where Love Finds its Forever
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                  size="txtOutfitMedium32"
                >
                  Discover Endless Possibilities in Your Matrimony Journey
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[237px] text-center text-xl"
                shape="round"
                color="teal_900"
              >
                Start Your Journey
              </Button>
            </div>
            <div className="bg-gray-900_02 flex flex-col gap-7 items-center justify-center max-w-[723px] mb-[341px] p-8 sm:px-5 rounded-[18px] w-full">
              <Text
                className="text-center text-white-A700 text-xl w-full"
                size="txtOutfitMedium20"
              >
                Main Heading
              </Text>
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-justify text-white-A700 w-auto"
                      size="txtOutfitRegular16"
                    >
                      Looking for
                    </Text>
                    <Input
                      name="gender"
                      placeholder="Male or Female"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-4 ml-[35px] my-0.5"
                          src="images/img_caretdownfill.svg"
                          alt="caret-down-fill"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-justify text-white-A700 w-auto"
                      size="txtOutfitRegular16"
                    >
                      Age
                    </Text>
                    <Input
                      name="frame48096490"
                      placeholder="Select Age"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="mt-px mb-1 h-4 ml-[35px]"
                          src="images/img_caretdownfill.svg"
                          alt="caret-down-fill"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-justify text-white-A700 w-auto"
                      size="txtOutfitRegular16"
                    >
                      Religion
                    </Text>
                    <Input
                      name="frame48096491"
                      placeholder="Select Religion"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="mt-px mb-1 h-4 ml-[35px]"
                          src="images/img_caretdownfill.svg"
                          alt="caret-down-fill"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-justify text-white-A700 w-auto"
                      size="txtOutfitRegular16"
                    >
                      Mother Tongue
                    </Text>
                    <Input
                      name="frame48096490_One"
                      placeholder="Choose Mother Tounge"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="mt-px mb-1 h-4 ml-[35px]"
                          src="images/img_caretdownfill.svg"
                          alt="caret-down-fill"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] text-center text-xl w-[229px]"
                  shape="round"
                >
                  Search (CTA)
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start mt-20 w-auto md:w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1597px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-amber-600 w-auto"
                  size="txtOutfitBold40"
                >
                  Discover Your Perfect Match with Our Powerful Features
                </Text>
                <Text
                  className="max-w-[977px] md:max-w-full text-center text-gray-900_01 text-lg"
                  size="txtOutfitRegular18Gray90001"
                >
                  Unlock a world of possibilities with our cutting-edge features
                  designed to make your journey to finding love seamless and
                  enjoyable. From advanced search options to privacy controls,
                  explore the tools that set us apart and maximize your chances
                  of meeting your ideal life partner.
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="bg-gray-200 flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1596px] px-10 sm:px-5 py-5 rounded-lg w-full">
                  <div className="flex flex-1 md:flex-col flex-row gap-[45px] items-start justify-start w-full">
                    <Img
                      className="h-10 w-[50px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <div className="flex sm:flex-1 flex-col h-10 md:h-auto items-start justify-center w-[528px] sm:w-full">
                      <Input
                        name="frameTwo"
                        placeholder="Type to search"
                        value={frametwovalue}
                        onChange={(e) => setFrametwovalue(e)}
                        className="!placeholder:text-gray-500_01 !text-gray-500_01 font-medium p-0 text-left text-xs w-full"
                        wrapClassName="border border-gray-300 border-solid flex w-full"
                        prefix={
                          <Img
                            className="cursor-pointer h-[18px] mr-2.5 my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        }
                        suffix={
                          <CloseSVG
                            fillColor="#a1a1aa"
                            className="cursor-pointer h-[18px] my-auto"
                            onClick={() => setFrametwovalue("")}
                            style={{
                              visibility:
                                frametwovalue?.length <= 0
                                  ? "hidden"
                                  : "visible",
                            }}
                            height={18}
                            width={18}
                            viewBox="0 0 18 18"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse38.png"
                    alt="ellipseThirtyEight"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                  <Frame48096505ColumnSix className="bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-1 flex-col gap-6 items-center justify-center rounded-lg w-auto sm:w-full" />
                  <div className="flex flex-1 flex-col font-lexend gap-6 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900_01 text-xl w-auto"
                        size="txtLexendMedium20"
                      >
                        Based on your prefference
                      </Text>
                      <div className="flex flex-col font-outfit items-start justify-start w-full">
                        <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-5 rounded-lg w-full">
                            <div className="flex flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                                src="images/img_frame106.png"
                                alt="frame106"
                              />
                              <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                                <Text
                                  className="text-gray-900_01 text-lg w-auto"
                                  size="txtOutfitMedium18"
                                >
                                  Sravani Reddykonda
                                </Text>
                                <Text
                                  className="text-base text-gray-700 w-auto"
                                  size="txtOutfitRegular16Gray700"
                                >
                                  26 yrs | 5ft 6in
                                </Text>
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Phn - 912177
                                </Text>
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Mail - sravani@gmail.com
                                </Text>
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Caste
                                </Text>
                                <Text
                                  className="text-base text-gray-900_03 w-auto"
                                  size="txtOutfitRegular16Gray90003"
                                >
                                  Occupation
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start p-5 rounded-lg w-full">
                            <Img
                              className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                              src="images/img_frame106_140x140.png"
                              alt="frame106"
                            />
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-gray-900_01 text-lg w-auto"
                                size="txtOutfitMedium18"
                              >
                                Sravani Reddykonda
                              </Text>
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtOutfitRegular16Gray700"
                              >
                                26 yrs | 5ft 6in
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Phn - 912177
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Mail - sravani@gmail.com
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Caste
                              </Text>
                              <Text
                                className="text-base text-gray-900_03 w-auto"
                                size="txtOutfitRegular16Gray90003"
                              >
                                Occupation
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start p-5 rounded-lg w-full">
                            <Img
                              className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                              src="images/img_frame106_1.png"
                              alt="frame106"
                            />
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-gray-900_01 text-lg w-auto"
                                size="txtOutfitMedium18"
                              >
                                Sravani Reddykonda
                              </Text>
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtOutfitRegular16Gray700"
                              >
                                26 yrs | 5ft 6in
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Phn - 912177
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Mail - sravani@gmail.com
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Caste
                              </Text>
                              <Text
                                className="text-base text-gray-900_03 w-auto"
                                size="txtOutfitRegular16Gray90003"
                              >
                                Occupation
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start p-5 rounded-lg w-full">
                            <Img
                              className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                              src="images/img_frame106_2.png"
                              alt="frame106"
                            />
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-gray-900_01 text-lg w-auto"
                                size="txtOutfitMedium18"
                              >
                                Sravani Reddykonda
                              </Text>
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtOutfitRegular16Gray700"
                              >
                                26 yrs | 5ft 6in
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Phn - 912177
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Mail - sravani@gmail.com
                              </Text>
                              <Text
                                className="text-gray-700 text-sm w-auto"
                                size="txtOutfitRegular14"
                              >
                                Caste
                              </Text>
                              <Text
                                className="text-base text-gray-900_03 w-auto"
                                size="txtOutfitRegular16Gray90003"
                              >
                                Occupation
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900_01 text-xl w-auto"
                        size="txtLexendMedium20"
                      >
                        Based on your prefference
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-outfit gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start p-5 rounded-lg w-full">
                          <Img
                            className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                            src="images/img_frame106_3.png"
                            alt="frame106"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                            <Text
                              className="text-gray-900_01 text-lg w-auto"
                              size="txtOutfitMedium18"
                            >
                              Sravani Reddykonda
                            </Text>
                            <Text
                              className="text-base text-gray-700 w-auto"
                              size="txtOutfitRegular16Gray700"
                            >
                              26 yrs | 5ft 6in
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Phn - 912177
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Mail - sravani@gmail.com
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Caste
                            </Text>
                            <Text
                              className="text-base text-gray-900_03 w-auto"
                              size="txtOutfitRegular16Gray90003"
                            >
                              Occupation
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-row gap-3 items-center justify-start p-5 rounded-lg w-full">
                          <Img
                            className="h-[140px] md:h-auto object-cover rounded-[14px] w-[140px]"
                            src="images/img_frame106_4.png"
                            alt="frame106"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                            <Text
                              className="text-gray-900_01 text-lg w-auto"
                              size="txtOutfitMedium18"
                            >
                              Sravani Reddykonda
                            </Text>
                            <Text
                              className="text-base text-gray-700 w-auto"
                              size="txtOutfitRegular16Gray700"
                            >
                              26 yrs | 5ft 6in
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Phn - 912177
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Mail - sravani@gmail.com
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtOutfitRegular14"
                            >
                              Caste
                            </Text>
                            <Text
                              className="text-base text-gray-900_03 w-auto"
                              size="txtOutfitRegular16Gray90003"
                            >
                              Occupation
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-auto md:w-full">
                  <Text
                    className="text-amber-600 text-base text-center tracking-[-0.20px] uppercase w-auto"
                    size="txtOutfitMedium16"
                  >
                    Feature Highlights
                  </Text>
                  <Text
                    className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900_01 tracking-[-2.00px] w-auto"
                    size="txtOutfitSemiBold52Gray90001"
                  >
                    Unveiling the Heart of Our Platform
                  </Text>
                </div>
                <Text
                  className="leading-[30.00px] md:max-w-full max-w-xl text-center text-gray-900_01 text-xl"
                  size="txtOutfitRegular20"
                >
                  Unlock the Door to Love: Register Now for a Journey of
                  Connections and Compatibility.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-auto md:w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_settings_amber_600.svg"
                        alt="settings"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="max-w-[413px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                        size="txtOutfitMedium24"
                      >
                        Precision Matchmaking at Your Fingertips
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        Experience matchmaking like never before. Our platform
                        employs sophisticated algorithms and detailed criteria
                        to ensure you connect with individuals who share your
                        values, interests, and aspirations. Take the first step
                        towards a meaningful relationship with our precision
                        matchmaking features.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_fi2438078.svg"
                        alt="fi2438078"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="max-w-[413px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                        size="txtOutfitMedium24"
                      >
                        Verified Profiles for Trusted Connections
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        Your safety is our priority. Every profile on our
                        platform undergoes a rigorous verification process,
                        providing you with the assurance that you are connecting
                        with genuine, like-minded individuals. Build meaningful
                        connections with confidence through our verified
                        profiles.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                        size="txtOutfitMedium24"
                      >
                        Tailored Search, Tailored Results
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        <>
                          Customize your search for love with our comprehensive
                          filter options. Whether it&#39;s age, location, or
                          interests, our tailored search feature allows you to
                          fine-tune your preferences, ensuring that every match
                          aligns with your unique criteria.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_fi1628475.svg"
                        alt="fi1628475"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                        size="txtLexendMedium24"
                      >
                        Success Stories That Inspire
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        Join the ranks of those who found love on our platform.
                        Explore real-life success stories and testimonials from
                        couples who embarked on their journey with us. Let their
                        stories inspire and reassure you that your perfect match
                        may be just a click away.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_fi1629101.svg"
                        alt="fi1629101"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                        size="txtLexendMedium24"
                      >
                        Your Privacy, Your Control
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        Take charge of your online journey with our robust
                        privacy controls. Manage who sees your profile and
                        choose the level of information you share. Your privacy
                        is paramount, and we give you the tools to navigate your
                        matrimony search on your terms.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center p-6 sm:px-5 w-full">
                    <div className="bg-amber-600_19 flex flex-col h-[94px] items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-[94px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="max-w-[463px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                        size="txtLexendMedium24"
                      >
                        Stay Connected with Seamless Messaging
                      </Text>
                      <Text
                        className="max-w-[463px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtOutfitRegular18Gray90001"
                      >
                        <>
                          Communication is key, and we&#39;ve made it easier
                          than ever. Our intuitive messaging platform lets you
                          connect effortlessly with potential matches. From
                          icebreakers to heartfelt conversations, foster
                          connections with ease and grace.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
            <div className="bg-gray-100 flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1920px] md:px-10 sm:px-5 px-[154px] py-20 w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1226px] mx-auto w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-amber-600 text-base text-center tracking-[-0.20px] uppercase w-auto"
                    size="txtOutfitMedium16"
                  >
                    394+ Happy Maangalaaym Users
                  </Text>
                  <Text
                    className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900_01 tracking-[-2.00px] w-auto"
                    size="txtOutfitSemiBold52Gray90001"
                  >
                    Don’t just take our words
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row font-lexend gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[175px] items-center justify-start rounded-[14px] w-[175px]">
                      <Img
                        className="h-[175px] md:h-auto object-cover rounded-[14px] w-[175px]"
                        src="images/img_image18.png"
                        alt="imageEighteen"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Img
                        className="h-[18px] w-[121px]"
                        src="images/img_review.svg"
                        alt="review"
                      />
                      <Text
                        className="leading-[24.00px] max-w-[398px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtLexendRegular18"
                      >
                        <>
                          &quot;We love Landingfolio! Our designers were using
                          it for their projects, so we already knew what kind of
                          design they want.&quot;
                        </>
                      </Text>
                      <Text
                        className="text-base text-gray-900_01 tracking-[-0.20px] w-auto"
                        size="txtLexendSemiBold16"
                      >
                        Raghu & Shwetha
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[175px] items-center justify-start rounded-[14px] w-[175px]">
                      <Img
                        className="h-[175px] md:h-auto object-cover rounded-[14px] w-[175px]"
                        src="images/img_image22_175x175.png"
                        alt="imageTwentyTwo"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Img
                        className="h-[18px] w-[121px]"
                        src="images/img_review.svg"
                        alt="review"
                      />
                      <Text
                        className="leading-[24.00px] max-w-[398px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtLexendRegular18"
                      >
                        <>
                          &quot;We love Landingfolio! Our designers were using
                          it for their projects, so we already knew what kind of
                          design they want.&quot;
                        </>
                      </Text>
                      <Text
                        className="text-base text-gray-900_01 tracking-[-0.20px] w-auto"
                        size="txtLexendSemiBold16"
                      >
                        Raghu & Shwetha
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                className="h-[42px] w-[252px]"
                src="images/img_frame48096227.svg"
                alt="frame48096227"
              />
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1920px] py-[120px] w-full">
              <div className="flex flex-col items-start justify-center sm:px-5 px-8 w-full">
                <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mx-auto md:px-5 w-full">
                  <div className="flex flex-col gap-3 items-center justify-center w-full">
                    <div className="flex flex-col gap-3 items-center justify-center max-w-[746px] w-full">
                      <Text
                        className="text-amber-600 text-base text-center tracking-[-0.20px] uppercase w-auto"
                        size="txtOutfitMedium16"
                      >
                        Join Us Today
                      </Text>
                      <Text
                        className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900_01 tracking-[-2.00px] w-full"
                        size="txtOutfitSemiBold52Gray90001"
                      >
                        Your Journey to Love Starts Here
                      </Text>
                    </div>
                    <Text
                      className="leading-[30.00px] md:max-w-full max-w-xl text-center text-gray-900_01 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Unlock the Door to Love: Register Now for a Journey of
                      Connections and Compatibility.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1226px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtOutfitMedium16Gray900"
                                >
                                  Profile
                                </Text>
                                <Input
                                  name="input"
                                  placeholder="Raghav"
                                  className="!placeholder:text-gray-900_04 !text-gray-900_04 font-medium p-0 text-base text-left w-full"
                                  wrapClassName="border border-blue_gray-100 border-solid flex shadow-bs w-full"
                                  suffix={
                                    <Img
                                      className="mt-px mb-1 h-4 ml-[35px]"
                                      src="images/img_caretdownfill.svg"
                                      alt="caret-down-fill"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  size="xs"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtOutfitMedium16Gray900"
                                >
                                  Gender
                                </Text>
                                <Input
                                  name="input_One"
                                  placeholder="Your name"
                                  className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left w-full"
                                  wrapClassName="border border-blue_gray-100 border-solid shadow-bs w-full"
                                  type="text"
                                  shape="round"
                                  color="white_A700"
                                  size="xs"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtOutfitMedium16Gray900"
                                >
                                  First Name
                                </Text>
                                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-3 rounded-lg shadow-bs w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-base text-gray-600 w-auto"
                                      size="txtOutfitRegular16Gray600"
                                    >
                                      Your name
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtOutfitMedium16Gray900"
                                >
                                  Second Name
                                </Text>
                                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-3 rounded-lg shadow-bs w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-base text-gray-600 w-auto"
                                      size="txtOutfitRegular16Gray600"
                                    >
                                      Your name
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col items-start justify-start w-[601px] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-900 w-auto"
                                size="txtOutfitMedium16Gray900"
                              >
                                Phone number
                              </Text>
                              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start rounded-lg shadow-bs w-full">
                                <SelectBox
                                  className="md:flex-1 h-12 text-base text-gray-900_05 text-left w-[11%] md:w-full"
                                  placeholderClassName="text-gray-900_05"
                                  indicator={
                                    <Img
                                      className="h-5 w-5"
                                      src="images/img_arrowdown_blue_gray_500.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="dropdown"
                                  options={dropdownOptionsList}
                                  isSearchable={false}
                                  placeholder="IN"
                                  size="sm"
                                />
                                <div className="flex flex-1 flex-col items-center justify-start pr-4 py-3 w-full">
                                  <Text
                                    className="text-base text-gray-600 w-auto"
                                    size="txtOutfitRegular16Gray600"
                                  >
                                    +91 - 74659123
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-start justify-start w-[216px]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Button
                            className="cursor-pointer font-medium shadow-bs text-base text-center w-full"
                            shape="round"
                            size="sm"
                          >
                            Get started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-col items-center justify-end p-[60px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1596px] mt-[39px] mx-auto w-full">
                <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[52px]"
                    src="images/img_layer1.svg"
                    alt="layerOne_One"
                  />
                  <Text
                    className="leading-[26.00px] text-base text-gray-900_01 w-full"
                    size="txtOutfitRegular16Gray90001"
                  >
                    Clarity gives you the blocks and components you need to
                    create a truly professional website.
                  </Text>
                </div>
                <div className="flex flex-row gap-[41px] items-start justify-start ml-28 md:ml-[0] w-auto">
                  <div className="flex flex-col gap-[30px] items-start justify-start">
                    <Text
                      className="text-[13px] text-gray-500_02 tracking-[1.00px] uppercase"
                      size="txtOutfitSemiBold13"
                    >
                      Company
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-gray-900_04"
                      size="txtOutfitMedium16Gray90004"
                    >
                      <>
                        About <br />
                        <br />
                        Features <br />
                        <br />
                        Contact Us <br />
                        <br />
                        Career{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start">
                    <Text
                      className="text-[13px] text-gray-500_02 tracking-[1.00px] uppercase"
                      size="txtOutfitSemiBold13"
                    >
                      Help
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-gray-900_04"
                      size="txtPoppinsMedium16"
                    >
                      <span className="text-gray-900_04 font-outfit text-left font-medium">
                        <>
                          Customer Support
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900_06 font-outfit text-left font-medium">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-amber-600 font-outfit text-left font-medium">
                        <>
                          Delivery Details
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900_04 font-outfit text-left font-medium">
                        <>
                          <br />
                          Terms & Conditions
                          <br />
                          <br />
                          Privacy Policy
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[594px] w-1/5 md:w-full">
                  <Text
                    className="text-[13px] text-gray-500_02 tracking-[1.00px] uppercase"
                    size="txtOutfitSemiBold13"
                  >
                    Newsletter
                  </Text>
                  <Input
                    name="content"
                    placeholder="Enter your email address"
                    className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300 border-solid mt-[30px] rounded-[10px] w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-medium h-[55px] mt-[13px] rounded-[9px] text-base text-center w-[306px]"
                    size="sm"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </div>
              <Line className="bg-gray-500_02 h-px max-w-[1596px] mt-[100px] mx-auto w-full" />
              <Text
                className="mt-[62px] text-center text-gray-900_04 text-sm"
                size="txtOutfitRegular14Gray90004"
              >
                © Copyright 2022, All Rights Reserved by ClarityUI
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame48096505Page;
