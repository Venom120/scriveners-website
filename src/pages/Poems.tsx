
import { Link } from "react-router-dom";
import { ArrowDown, User, Search, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdminLoginDialog from "@/components/AdminLoginDialog";
import AdminPointsControls from "@/components/AdminPointsControls";
import AddUserForm from "@/components/AddUserForm";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";