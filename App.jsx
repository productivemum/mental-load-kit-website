import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Brain, Heart, CheckSquare, Users, Calendar, Lightbulb, Printer, ArrowRight } from 'lucide-react'
import productiveMumLogo from './assets/productive-mum-logo.png'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('intro')
  const [carryTasks, setCarryTasks] = useState(Array(20).fill(''))

  const pages = [
    { id: 'intro', title: 'Introduction', icon: Brain },
    { id: 'communication', title: 'Communication Helper', icon: Heart },
    { id: 'carry', title: 'What I Carry', icon: CheckSquare },
    { id: 'checklist', title: 'Awareness Checklist', icon: Users },
    { id: 'splitter', title: 'Task Splitter', icon: Calendar },
    { id: 'planner', title: 'Fair Plan', icon: Lightbulb }
  ]

  const PrintSection = () => (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Printer className="h-5 w-5" />
          Print This Section
        </CardTitle>
        <CardDescription>
          Print this page to fill out by hand or use offline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          onClick={() => window.print()}
          className="flex items-center gap-2"
        >
          <Printer className="h-4 w-4" />
          Print This Page
        </Button>
      </CardContent>
    </Card>
  )

  const IntroPage = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Mental Load Awareness Kit</h1>
        <p className="text-xl text-gray-600">Understanding and rebalancing the invisible work in relationships</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6" />
            Welcome, Super Mum!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We see you. You're the glue that holds everything together. From the moment you wake up until your head finally hits the pillow, 
            you're managing countless tasks, big and small, that keep your household running smoothly. It's amazing how much you carry every single day, 
            and it's time to acknowledge just how incredible you are.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
            <p className="text-blue-800">
              The mental load – those invisible tasks that keep your family organized, healthy, and happy – often goes unnoticed. 
              But not here. We want to shine a light on the incredible amount of work you do daily. This isn't just a list; 
              it's recognition that we see you, we are you, and we can support you.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">💡 How to use this together</h3>
            <p className="text-green-800">
              Set aside 20-30 minutes together without distractions. This tool is designed to help both partners understand 
              and rebalance the mental load together. You can work through it digitally or print sections to fill in separately 
              and then discuss. Remember, this is about understanding each other better, not assigning blame.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">🌟 You Are Super Woman!</h3>
            <p className="text-purple-800">
              Balancing the responsibilities of being a mum, partner, professional, and individual is no easy feat. 
              You're a multitasking marvel, a problem-solving genius, and the heartbeat of your home. It's time to celebrate that.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <PrintSection />
    </div>
  )

  const CommunicationPage = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            Starting the Conversation
          </CardTitle>
          <CardDescription>
            Tips and approaches for having productive discussions about household responsibilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-3">Conversation Starters</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-gray-700">
                  "I've been thinking about how we can work together more effectively as a team. 
                  Could we spend some time looking at how we currently divide responsibilities and see if there are ways to make things work better for both of us?"
                </p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-gray-700">
                  "I found this tool that helps couples understand the different types of work that go into running a household. 
                  Would you be interested in going through it together to see how we can support each other better?"
                </p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-gray-700">
                  "I'd love to have a conversation about how we can both feel more supported in our relationship. 
                  Could we look at this together and see what insights it brings up for us?"
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">💡 Tips for Success</h4>
            <ul className="text-green-800 space-y-1">
              <li>• Approach this as a team working toward a common goal</li>
              <li>• Focus on understanding rather than being understood</li>
              <li>• Use "we" language instead of "you" language</li>
              <li>• Take breaks if the conversation becomes tense</li>
              <li>• Celebrate the things that are already working well</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <PrintSection />
    </div>
  )

  const CarryPage = () => {
    const updateTask = (index, value) => {
      const newTasks = [...carryTasks]
      newTasks[index] = value
      setCarryTasks(newTasks)
    }

    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="h-6 w-6" />
              What I Carry (Individual Reflection)
            </CardTitle>
            <CardDescription>
              Each person lists tasks they handle that contribute to the mental, emotional, and physical load
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">🤝 How to do this together</h3>
              <p className="text-amber-800 mb-2">
                <strong>Option 1 (Recommended):</strong> Print this section and fill it out separately, then share and discuss your lists.
              </p>
              <p className="text-amber-800">
                <strong>Option 2:</strong> Take turns using this digital form - one person fills it out while the other steps away, 
                then switch. Screenshot or write down your lists before sharing.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">My Tasks and Responsibilities</h3>
              <p className="text-gray-600 text-sm">
                Think about everything you do - from the obvious tasks to the invisible mental work of planning, remembering, and organizing.
              </p>
              {carryTasks.map((task, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Input
                    placeholder={`Task ${index + 1}...`}
                    value={task}
                    onChange={(e) => updateTask(index, e.target.value)}
                    className="flex-1"
                  />
                  <div className="flex gap-2 text-sm">
                    <label className="flex items-center gap-1">
                      <Checkbox /> Physical
                    </label>
                    <label className="flex items-center gap-1">
                      <Checkbox /> Emotional
                    </label>
                    <label className="flex items-center gap-1">
                      <Checkbox /> Admin
                    </label>
                    <label className="flex items-center gap-1">
                      <Checkbox /> Planning
                    </label>
                    <label className="flex items-center gap-1">
                      <Checkbox /> Remembering
                    </label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">After completing your lists:</h4>
              <p className="text-blue-800">
                Share your lists with each other. Look for patterns, surprises, and opportunities to support each other better. 
                Remember, this isn't about keeping score - it's about understanding and appreciation.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <PrintSection />
      </div>
    )
  }

  const ChecklistPage = () => {
    const mentalLoadCategories = [
      {
        name: "Morning Routine",
        tasks: [
          "Prepare breakfast for everyone",
          "Pack school lunches", 
          "Ensure kids are dressed and ready for school",
          "Double-check school bags (homework, etc)",
          "Drop kids off at school",
          "Iron school clothes",
          "Buy/repair school uniform",
          "Remember/pack P.E kit",
          "Default parent if child is sick",
          "Check weather to see if coats are needed"
        ]
      },
      {
        name: "Evening Routine", 
        tasks: [
          "Prepare and serve dinner",
          "Help kids with homework",
          "Bath routine",
          "Bedtime routine for kids",
          "Tidy up the house",
          "Plan and prepare for the next day",
          "Night wake-ups"
        ]
      },
      {
        name: "Home Management",
        tasks: [
          "Create weekly meal plan",
          "Grocery shopping or online grocery order",
          "Schedule any home maintenance or repairs",
          "Pay bills and manage household budget",
          "Laundry (wash, dry)",
          "Laundry (fold and put away)",
          "Sort kids clothes they no longer fit in",
          "Recycling",
          "Empty fridge",
          "Gardening",
          "Deal with community/neighbour conversations",
          "Ironing",
          "Declutter common areas",
          "Return parcels to post office",
          "Clean cars",
          "Pay window cleaner",
          "Pay/let in house cleaner",
          "Book weekend trips/holidays",
          "Pay bills",
          "Print photos for house frames",
          "Water plants",
          "Keep an eye on passport renewals",
          "Handle family legal documents (wills etc)",
          "Regular deep cleans",
          "Completing forms/documents",
          "Finance considerations"
        ]
      },
      {
        name: "Kids' Activities",
        tasks: [
          "Check and update the kids' activity calendar",
          "Plan birthdays and birthday presents",
          "Prepare any necessary equipment or uniforms",
          "Arrange transportation for activities",
          "Attend or participate in kids' events",
          "Liaise/pay for kids extra curricular activities",
          "Oversee homework",
          "Arrange childcare or babysitters",
          "Pack snacks and water",
          "Replace water bottles/lost property",
          "Parents evening attendance"
        ]
      },
      {
        name: "Personal Care",
        tasks: [
          "Schedule and attend personal appointments (Drs, etc.)",
          "Plan and allocate time for fitness (workouts, yoga, etc.)",
          "Ensure you have some downtime or self-care",
          "Plan social activities with friends/family",
          "Hair cuts",
          "Drink enough water",
          "Take vitamins",
          "Manage digital services and subscriptions",
          "Clear emails/respond to emails",
          "Get enough sleep",
          "Checking in on friends"
        ]
      },
      {
        name: "Miscellaneous",
        tasks: [
          "Keep track of important dates (birthdays, anniversaries)",
          "Plan family vacations or outings",
          "Maintain a family calendar for schedules",
          "Ensure pet care (feeding, walking, vet appointments)"
        ]
      }
    ]

    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              The Ultimate Mental Load Checklist
            </CardTitle>
            <CardDescription>
              70+ mental load activities that mums handle every day - identify who currently does each task
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">🤝 How to use this together</h3>
              <p className="text-green-800">
                Go through this comprehensive list together and for each task, write down the name of the person who primarily handles it, or type "Both" if it's a shared responsibility. 
                This will help you both understand the full scope of what goes into running your household and 
                create a clear picture before moving to the Task Splitter section.
              </p>
            </div>
            
            {mentalLoadCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{category.name}</h3>
                <div className="space-y-2">
                  {category.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="grid grid-cols-3 gap-4 items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-gray-700 col-span-1">{task}</span>
                      <Input placeholder="Who does this? (e.g., Your Name, Partner's Name, Both)" className="text-sm col-span-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Your Unique Tasks</h3>
              <p className="text-gray-600 text-sm">Add tasks that are specific to your household</p>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="grid grid-cols-3 gap-4 items-center">
                  <Input placeholder={`Custom task ${num}...`} className="col-span-1" />
                  <Input placeholder="Who does this? (e.g., Your Name, Partner's Name, Both)" className="text-sm col-span-2" />
                </div>
              ))}
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">💡 Next Step</h4>
              <p className="text-amber-800">
                Use these insights in the Task Splitter section to discuss how responsibilities could be redistributed 
                or better supported. This checklist gives you the foundation for meaningful conversation about balance.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <PrintSection />
      </div>
    )
  }

  const SplitterPage = () => {
    const taskCategories = [
      {
        name: "Daily Tasks",
        tasks: ["Morning routine", "Evening routine", "Meal preparation", "School runs", "Bedtime routines"]
      },
      {
        name: "Weekly Tasks", 
        tasks: ["Grocery shopping", "Laundry", "House cleaning", "Meal planning", "School/activity coordination"]
      },
      {
        name: "Monthly Tasks",
        tasks: ["Bill paying", "Deep cleaning", "Appointment scheduling", "Activity planning", "Budget review"]
      },
      {
        name: "Ongoing Responsibilities",
        tasks: ["Emotional support", "Health management", "Social coordination", "Future planning", "Problem solving"]
      }
    ]

    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Household Responsibility Discussion
            </CardTitle>
            <CardDescription>
              Work together to understand current responsibilities and explore opportunities for better balance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">🤝 How to approach this together</h3>
              <p className="text-blue-800">
                This builds on what you discovered in the Awareness Checklist. Look at the tasks you both identified and discuss 
                how they could be shared or redistributed in a way that works better for both of you.
              </p>
            </div>
            
            {taskCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{category.name}</h3>
                <div className="space-y-2">
                  {category.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="grid grid-cols-4 gap-4 items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-gray-700 font-medium">{task}</span>
                      <Input placeholder="Currently handled by..." className="text-sm" />
                      <Input placeholder="Could be shared how?" className="text-sm" />
                      <Input placeholder="Priority level (1-5)" className="text-sm" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">💡 Next Step</h4>
              <p className="text-amber-800">
                Use these insights to create your Fair Plan in the next section. Focus on the tasks that could benefit from 
                redistribution or better support systems.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <PrintSection />
      </div>
    )
  }

  const PlannerPage = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Our Partnership Plan
          </CardTitle>
          <CardDescription>
            Create a structured plan based on your discoveries from the previous sections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">🤝 Building on your insights</h3>
            <p className="text-green-800">
              This plan should reflect what you learned about each other's mental load and the opportunities for better balance 
              you identified in the previous sections.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Step 1: Immediate Changes
              </h3>
              <p className="text-gray-600 mb-4">Tasks that can be redistributed or shared right away</p>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="grid grid-cols-3 gap-4 items-center mb-2">
                  <Input placeholder={`Task to redistribute ${num}...`} />
                  <Input placeholder="New arrangement..." />
                  <Input placeholder="Start date..." type="date" />
                </div>
              ))}
            </div>
            
            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Step 2: Support Systems
              </h3>
              <p className="text-gray-600 mb-4">How you'll support each other in your respective responsibilities</p>
              {[1, 2, 3].map((num) => (
                <div key={num} className="grid grid-cols-2 gap-4 items-center mb-2">
                  <Input placeholder={`Area needing support ${num}...`} />
                  <Input placeholder="How partner can help..." />
                </div>
              ))}
            </div>
            
            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Step 3: Communication Plan
              </h3>
              <p className="text-gray-600 mb-4">How you'll check in and adjust your plan</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weekly check-in day/time:</label>
                    <Input placeholder="e.g., Sunday evenings" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly review date:</label>
                    <Input placeholder="e.g., First Saturday of month" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How we'll handle adjustments:</label>
                  <Textarea placeholder="Describe your process for making changes..." rows={3} />
                </div>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Step 4: Appreciation & Recognition
              </h3>
              <p className="text-gray-600 mb-4">How you'll acknowledge each other's contributions</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ways we'll show appreciation:</label>
                  <Textarea placeholder="List specific ways you'll recognize each other's efforts..." rows={3} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Our celebration plan when things go well:</label>
                  <Input placeholder="How you'll celebrate successful balance..." />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">🌟 Remember</h4>
            <p className="text-purple-800">
              This plan is a living document. Life changes, and your plan should be flexible enough to change with it. 
              The goal is partnership, understanding, and mutual support - not perfection.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <PrintSection />
    </div>
  )

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'intro': return <IntroPage />
      case 'communication': return <CommunicationPage />
      case 'carry': return <CarryPage />
      case 'checklist': return <ChecklistPage />
      case 'splitter': return <SplitterPage />
      case 'planner': return <PlannerPage />
      default: return <IntroPage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={productiveMumLogo} alt="The Productive Mum" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-bold text-gray-900">Mental Load Kit</span>
                <div className="text-xs text-gray-600">by The Productive Mum</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {pages.map((page) => {
                const IconComponent = page.icon
                return (
                  <Button
                    key={page.id}
                    variant={currentPage === page.id ? "default" : "ghost"}
                    onClick={() => setCurrentPage(page.id)}
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    {page.title}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="flex overflow-x-auto p-2 space-x-2">
          {pages.map((page) => {
            const IconComponent = page.icon
            return (
              <Button
                key={page.id}
                variant={currentPage === page.id ? "default" : "ghost"}
                onClick={() => setCurrentPage(page.id)}
                className="flex items-center gap-2 whitespace-nowrap"
                size="sm"
              >
                <IconComponent className="h-4 w-4" />
                {page.title}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={productiveMumLogo} alt="The Productive Mum" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-900">The Productive Mum</span>
          </div>
          <p className="text-gray-600 mb-2">
            Mental Load Awareness Kit - Supporting couples in creating more balanced partnerships
          </p>
          <p className="text-gray-500 text-sm">
            Visit us at <a href="https://productivemum.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">productivemum.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


