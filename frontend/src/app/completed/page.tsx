"use client"
import React from 'react'
import Tasks from "../../components/Tasks";
import { useGlobalState } from "../context/globalProvider";
import styled from 'styled-components';

export default function CompletedTasks() {
  const {tasks} = useGlobalState();
  const completedTasks = tasks.filter(task => task.isCompleted);

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}