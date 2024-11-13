import { useState } from "react";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			baseUrl: "https://playground.4geeks.com/contact",
			idToDelete: null
		},
		actions: {
			getAllContacts: async () => {
				try {

					let response = await fetch(`${getStore().baseUrl}/agendas/miagenda/contacts`)
					let data = await response.json()
					if (response.ok) {
						setStore({
							contacts: data.contacts
						})
					}
					else {
						let response = await fetch(`${getStore().baseUrl}/agendas/miagenda`,
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: {
									"name": "",
									"phone": "",
									"email": "",
									"address": ""
								}
							})
						let data = await response.json()
						
					}

				} catch (error) {
					console.log(error)
				}
			},
			addContact: async (contact) => {
				try {
					let response = await fetch(`${getStore().baseUrl}/agendas/miagenda/contacts`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(contact)
						})
					let data = await response.json()
					getActions().getAllContacts()
					console.log(data.id)
				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (contact) => {
				try {
					console.log(contact.id)
					let response = await fetch(`${getStore().baseUrl}/agendas/miagenda/contacts/${contact}`,
						{
							method: "DELETE"
						}
					)
					getActions().getAllContacts()

				} catch (error) {
					console.log(error)
				}
			},
			editContact: async (editedContact, id) => {
				try {
					let response = await fetch(`${getStore().baseUrl}/agendas/miagenda/contacts/${id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(editedContact)
						},
					)
					getActions().getAllContacts()
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
