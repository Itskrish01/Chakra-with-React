import React, { useState } from "react";
import Job from "../components/Job";
import { useStateContext } from "../store/context";
import "./style.css";
import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useToast,
  FormControl,
  Alert,
  AlertIcon,
  AlertTitle,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";

const Jobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    name: "",
    description: "",
    image: "",
  });

  const toast = useToast();

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const { jobs, onAddJob } = useStateContext();

  const handleChanger = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
    console.log(jobDetails);
  };

  const submitHandler = () => {
    const { name, description, image } = jobDetails;
    if ((name === "" && description === "", image === "")) {
      setIsError(true);
      return;
    }
    onAddJob(jobDetails.name, jobDetails.description, jobDetails.image);
    onClose();
    toast({
      title: "Job Created",
      description: "We've created the job and added in the list",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setJobDetails({
      name: "",
      description: "",
      image: "",
    });
  };

  return (
    <>
      <div className="fixed right-2 top-2">
        <Button
          rightIcon={<AddIcon />}
          onClick={onOpen}
          colorScheme="teal"
          variant="outline"
        >
          Add job
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {isError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Missing Fields!</AlertTitle>
            </Alert>
          )}
          <ModalHeader>Create a Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Job Name</FormLabel>
              <Input
                placeholder="Software Engineer..."
                onChange={handleChanger}
                name="name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Something..."
                name="description"
                onChange={handleChanger}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                placeholder="Link of the image"
                onChange={handleChanger}
                name="image"
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={submitHandler} mr={3}>
              Add job
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="heading text-center p-5">
        <h2 className="text-[2rem] font-bold">Built for {"</developers>"}</h2>
        <p>Discover jobs exclusive to your roles</p>
      </div>
      <div className="cards mt-5">
        {jobs.map((job, idx) => {
          return <Job key={idx} job={job} />;
        })}
      </div>
    </>
  );
};

export default Jobs;
