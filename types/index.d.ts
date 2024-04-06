import { ReactNode } from "react";

export interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  style: string;
}

export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  style?: string;
  children?: ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
}

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";
