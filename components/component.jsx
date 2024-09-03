"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  const [activeTab, setActiveTab] = useState("personal")
  const [allergies, setAllergies] = useState([
    {
      name: "Peanuts",
      type: "Food",
      severity: "Severe",
      management: "Avoid peanuts, carry epinephrine auto-injector",
    },
    {
      name: "Penicillin",
      type: "Medication",
      severity: "Moderate",
      management: "Avoid penicillin, use alternative antibiotics",
    },
    {
      name: "Dust Mites",
      type: "Environmental",
      severity: "Mild",
      management: "Use dust mite covers, HEPA air purifier",
    },
  ])
  const [medicalData, setMedicalData] = useState([
    {
      diagnosis: "Appendicitis",
      date: "2022-05-15",
      physician: "Dr. Smith",
      surgery: {
        type: "Appendectomy",
        date: "2022-05-16",
        outcome: "Successful",
        recovery: "2 weeks",
      },
    },
    {
      diagnosis: "Flu",
      date: "2023-01-10",
      physician: "Dr. Johnson",
      surgery: null,
    },
    {
      diagnosis: "Broken Arm",
      date: "2021-09-20",
      physician: "Dr. Williams",
      surgery: {
        type: "Open Reduction and Internal Fixation",
        date: "2021-09-21",
        outcome: "Successful",
        recovery: "6 weeks",
      },
    },
  ])
  const [newMedicalData, setNewMedicalData] = useState({
    diagnosis: "",
    date: "",
    physician: "",
    surgery: {
      type: "",
      date: "",
      outcome: "",
      recovery: "",
    },
  })
  const handleAddMedicalData = () => {
    setMedicalData([...medicalData, newMedicalData])
    setNewMedicalData({
      diagnosis: "",
      date: "",
      physician: "",
      surgery: {
        type: "",
        date: "",
        outcome: "",
        recovery: "",
      },
    })
  }
  const handleAllergiesExpand = (index) => {
    const updatedAllergies = [...allergies]
    updatedAllergies[index].expanded = !updatedAllergies[index].expanded
    setAllergies(updatedAllergies)
  }
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Med-Vision</h1>
        <nav className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${activeTab === "personal" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Details
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${activeTab === "medical" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            onClick={() => setActiveTab("medical")}
          >
            Medical Data
          </button>
        </nav>
      </header>
      {activeTab === "personal" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" type="text" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="date-of-birth">Date of Birth</Label>
              <Input id="date-of-birth" type="date" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" rows="3" placeholder="123 Main St, Apt 4B" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="555-555-5555" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div>
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Input id="insurance" type="text" placeholder="Acme Health Insurance" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="allergy-type">Allergy Type</Label>
              <Select id="allergy-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="medication">Medication</SelectItem>
                  <SelectItem value="environmental">Environmental</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="allergy-name">Allergy Name</Label>
              <Input id="allergy-name" type="text" placeholder="Pollen" />
            </div>
            <div>
              <Label htmlFor="allergy-severity">Severity</Label>
              <Select id="allergy-severity">
                <SelectTrigger>
                  <SelectValue placeholder="Select Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mild">Mild</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="severe">Severe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="allergy-management">Management</Label>
              <Textarea id="allergy-management" rows="3" placeholder="Avoid exposure, carry epinephrine" />
            </div>
            <Button onClick={() => handleAddAllergy()}>Add Allergy</Button>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Management</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allergies.map((allergy, index) => (
                    <TableRow key={index}>
                      <TableCell>{allergy.name}</TableCell>
                      <TableCell>{allergy.type}</TableCell>
                      <TableCell>{allergy.severity}</TableCell>
                      <TableCell>{allergy.management}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )}
      {activeTab === "medical" && (
        <div className="space-y-8">
          <div>
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <Input
              id="diagnosis"
              type="text"
              value={newMedicalData.diagnosis}
              onChange={(e) => setNewMedicalData({ ...newMedicalData, diagnosis: e.target.value })}
              placeholder="Diagnosis"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={newMedicalData.date}
              onChange={(e) => setNewMedicalData({ ...newMedicalData, date: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="physician">Physician</Label>
            <Input
              id="physician"
              type="text"
              value={newMedicalData.physician}
              onChange={(e) => setNewMedicalData({ ...newMedicalData, physician: e.target.value })}
              placeholder="Physician's Name"
            />
          </div>
          <div>
            <Label htmlFor="surgery-type">Surgery Type</Label>
            <Input
              id="surgery-type"
              type="text"
              value={newMedicalData.surgery.type}
              onChange={(e) => setNewMedicalData({
                ...newMedicalData,
                surgery: { ...newMedicalData.surgery, type: e.target.value }
              })}
              placeholder="Surgery Type"
            />
          </div>
          <div>
            <Label htmlFor="surgery-date">Surgery Date</Label>
            <Input
              id="surgery-date"
              type="date"
              value={newMedicalData.surgery.date}
              onChange={(e) => setNewMedicalData({
                ...newMedicalData,
                surgery: { ...newMedicalData.surgery, date: e.target.value }
              })}
            />
          </div>
          <div>
            <Label htmlFor="surgery-outcome">Surgery Outcome</Label>
            <Input
              id="surgery-outcome"
              type="text"
              value={newMedicalData.surgery.outcome}
              onChange={(e) => setNewMedicalData({
                ...newMedicalData,
                surgery: { ...newMedicalData.surgery, outcome: e.target.value }
              })}
              placeholder="Surgery Outcome"
            />
          </div>
          <div>
            <Label htmlFor="surgery-recovery">Surgery Recovery</Label>
            <Input
              id="surgery-recovery"
              type="text"
              value={newMedicalData.surgery.recovery}
              onChange={(e) => setNewMedicalData({
                ...newMedicalData,
                surgery: { ...newMedicalData.surgery, recovery: e.target.value }
              })}
              placeholder="Recovery Time"
            />
          </div>
          <Button onClick={handleAddMedicalData}>Add Medical Data</Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Physician</TableHead>
                <TableHead>Surgery Type</TableHead>
                <TableHead>Surgery Date</TableHead>
                <TableHead>Surgery Outcome</TableHead>
                <TableHead>Surgery Recovery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.diagnosis}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.physician}</TableCell>
                  <TableCell>{data.surgery?.type || '-'}</TableCell>
                  <TableCell>{data.surgery?.date || '-'}</TableCell>
                  <TableCell>{data.surgery?.outcome || '-'}</TableCell>
                  <TableCell>{data.surgery?.recovery || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
