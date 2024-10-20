/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// The above header is a linting requirement of the Vencord project workspace.
// This plugin is unaffiliated with the Vencord project.

import { Channel, MessageJSON } from "discord-types/general";

/**
 * Payload for message update events.
 */
export interface MessageUpdatePayload {
    type: string;
    guildId: string;
    channelId: string;
    message: MessageJSON;
}

/**
 * Payload for message creation events.
 */
export interface MessageCreatePayload {
    type: string;
    guildId: string;
    channelId: string;
    message: MessageJSON;
    optimistic: boolean;
    isPushNotification: boolean;
}

/**
 * Payload for message deletion events.
 */
export interface MessageDeletePayload {
    type: string;
    guildId: string;
    id: string;
    channelId: string;
    mlDeleted?: boolean;
}

/**
 * Payload for typing start events.
 */
export interface TypingStartPayload {
    type: string;
    channelId: string;
    userId: string;
}

/**
 * Payload for user profile update events.
 */
export interface UserUpdatePayload {
    type: string;
    user: {
        id: string;
        username: string;
        avatar: string;
        discriminator: string;
        flags: number;
        banner: string;
        banner_color: string;
        accent_color: number;
        bio: string;
        publicFlags: number;
        avatarDecorationData: {
            asset: string;
            skuId: string;
        };
        globalName: string | null;
    };
}

/**
 * Payload for thread creation events.
 */
interface ThreadCreatePayload {
    type: string;
    isNewlyCreated: boolean;
    channel: Channel;
}

/**
 * Types of events the plugin subscribes to.
 */
export type subscribedEvents =
    | "MESSAGE_CREATE"
    | "MESSAGE_DELETE"
    | "MESSAGE_UPDATE"
    | "THREAD_CREATE"
    | "TYPING_START"
    | "USER_UPDATE";
