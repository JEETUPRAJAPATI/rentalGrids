import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      
      // Store the lead
      const lead = await storage.createLead({
        ...leadData,
        createdAt: new Date().toISOString(),
      });
      
      return res.status(201).json({ 
        message: "Lead captured successfully",
        id: lead.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid lead data", errors: error.errors });
      }
      return res.status(500).json({ message: "Failed to capture lead" });
    }
  });

  // Get all leads endpoint (for admin use)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      return res.status(200).json(leads);
    } catch (error) {
      return res.status(500).json({ message: "Failed to retrieve leads" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
