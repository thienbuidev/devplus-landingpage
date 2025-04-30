"use client";

import Image from "next/image";
import { Button, Divider, Input, Select, Tag } from "antd";
import { TagDisplayName } from "constant/tagStatus";
import { MapComponent } from "@/components/community/MapComponent";
import { warrios } from "@/constant/data";
import { useState } from "react";
import JoinFormModal from "@/components/community/join-form";

const { Option } = Select;

export default function WarriosPage() {
  const [joinModal, setJoinModal] = useState(false);

  const handleJoinClick = () => {
    setJoinModal(true);
  };

  const onCloseModal = () => {
    setJoinModal(false);
  };

  return (
    <div className="flex gap-10 md:mt-22 mt-0 flex-col w-full h-full px-4 md:px-0 items-center justify-center">
      <div className="flex items-center justify-center">
        <MapComponent />
      </div>

      <div className="container flex w-full justify-center items-center flex-col">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="md:text-2xl text-xl lg:text-3xl font-semibold flex justify-start w-full">
            DISCOVER CLIMATE TECH COMPANIES IN VIET NAM
          </div>
          <div>
            <Button
              className="!bg-blue-500 !text-white !hover:bg-blue-600 !font-semibold"
              onClick={handleJoinClick}
            >
              Join
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 mt-4">
          <div className="flex gap-2 justify-start w-full">
            <Input
              className="max-w-[250px]"
              placeholder="Search by name"
              // value={value.name}
              // onChange={handleSearchChange}
              size="large"
            />
            <Select
              mode="multiple"
              placeholder="Select tag"
              // value={value.tag || undefined}
              // onChange={handleTagChange}
              style={{ width: 400 }}
              maxTagCount={2}
              allowClear
              size="large"
            >
              {Object.entries(TagDisplayName).map(([key, label]) => (
                <Option key={key} value={key}>
                  {label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
              {warrios.map((item) => (
                <div
                  className="flex flex-col rounded-xl border border-gray-400 p-3"
                  key={item.name}
                >
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.url || "/logo.png"}
                        alt="Logo"
                        className="rounded-full max-w-[60px] max-h-[60px] h-[60px] w-[60px] shadow-md"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="flex gap-1 flex-col">
                      <div className="flex font-semibold text-lg">
                        {item.name}
                      </div>
                      <div>
                        <Tag color="magenta">
                          {
                            TagDisplayName[
                              item.tag as keyof typeof TagDisplayName
                            ]
                          }
                        </Tag>
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <JoinFormModal isOpen={joinModal} onClose={onCloseModal} />
    </div>
  );
}
