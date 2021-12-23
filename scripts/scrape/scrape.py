from bs4 import BeautifulSoup, NavigableString, Tag
import random

def parseDepartments(soup):

    departments = []

    for department in soup.find(id='program_list'):
        if isinstance(department, NavigableString):
            continue
        if isinstance(department, Tag):
            programs = []

            for program in department.find_all('a'):
                programs.append(program.contents[0])

            departments.append([department.h3.contents[0], programs])

    return(departments)

def generateRandomProgram(departments):

    randomDepartmentNum = random.randrange(1,20)
    randomProgramNum = random.randrange(1,20)

    department = departments[randomDepartmentNum % len(departments)][0]

    programs = departments[randomDepartmentNum % len(departments)][1]
    program = programs[randomProgramNum % len(programs)]

    return(department, program)

if __name__ == "__main__":
    with open("undergraduate_programs.html") as fp:
        soup = BeautifulSoup(fp, 'html.parser')

    departments = parseDepartments(soup)
    # findRandomProgram = generateRandomProgram(departments)
    # print("Random undergraduate program", findRandomProgram)


    # with open("graduate_programs.html") as fp:
    #     soup = BeautifulSoup(fp, 'html.parser')

    # departments = parseDepartments(soup)
    # findRandomProgram = generateRandomProgram(departments)
    # print("Random graduate program", findRandomProgram)


    for department in departments:
        print("Department: " + str(department[0]) + ",")
        for program in department[1]:
            print(str(program) + ",")

        print('\n')